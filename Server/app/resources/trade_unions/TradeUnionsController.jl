module TradeUnionsController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests, GenieAuthentication, DataFrames
using JSON3
using SearchLight,SearchLightPostgreSQL, LibPQ, JSON3
using Server.DatabaseSupport, Server.TemplateEditor, Server.Users
import Server.DatabaseSupport: select_from_table, insert_into_table, delete_from_table, exist_in_table

controller = "trade_unions"
dict_layouts = Dict(
    :trade_unions => generate_layout_html("main",controller,"trade_unions",libraries=["Leaflet"]),
    :trade_unions_add => generate_layout_html("main",controller,"trade_unions_add",libraries=["Leaflet"]),
)

#---Page info-----------------------------------------------------

const trade_unions_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Trade Unions",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Профсоюзы",
        :description => ""
    ),
    "fr" => Dict(
        :title => "LibSoc - Syndicats",
        :description => ""
    )
)

function get_locale()
    data = payload()
    if :locale in keys(data)
        return data[:locale]
    else
        return "en"
    end
end

#---Helpers-----------------------------------------------------------


function table_to_json(name,df)
    ar = []
    for df_row in eachrow(df)
        dict = Dict()
        for id in names(df_row)
            dict[id] = df_row[id]
        end
        push!(ar,dict)
    end
    open("public/assets/"*name*".json", "w") do io
        JSON3.write(io, ar)
    end
end

function compile(name)
    df = select_from_table([name => ["*"]])
    table_to_json(name,df)
end

function move_requests(name)
    df_requests = select_from_table(["$(name)_requests" => ["*"]], where_data=["verified" => true, "added" => false])
    df = select_from_table([name => ["*"]])
    latitudes = df.latitude
    longitudes = df.longitude
    for df_row in eachrow(df_requests)
        ind_id_given = ismissing(df_row.id_given) ? nothing : findfirst(df_row.id_given.==df.id)
        if (!isnothing(ind_id_given))
            id = df[ind_id_given,:id]
            row_found = df[ind_id_given,Not(:id)]
            dict = Dict(zip(names(row_found),values(row_found)))
            dict["members"] += 1
            update_table(name,dict, where_data=["id" => id])
        else
            id = df_row.id
            dict_update = Dict("added" => true)
            update_table("$(name)_requests",dict_update, where_data=["id" => id])

            df_row_to_add = df_row[Not(:id_given)]
            df_row_to_add = df_row_to_add[Not(:verified)]
            df_row_to_add = df_row_to_add[Not(:added)]
            df_row_to_add = df_row_to_add[Not(:id)]
            dict = Dict(zip(names(df_row_to_add),values(df_row_to_add)))
            dict["members"] = 1
            insert_into_table(name,dict)
        end
    end
end

#---Functions---------------------------------------------------------

current_user() = findone(Users.User, id = get_authentication())

function trade_unions()
    locale = get_locale()
    html(:trade_unions,:trade_unions, layout = dict_layouts[:trade_unions], context = @__MODULE__,
        title = trade_unions_info[locale][:title],
        description = trade_unions_info[locale][:description]
    )
end

function trade_unions_add()
    locale = get_locale()
    html(:trade_unions,:trade_unions_add, layout = dict_layouts[:trade_unions_add], context = @__MODULE__,
        title = trade_unions_info[locale][:title],
        description = trade_unions_info[locale][:description]
    )
end

function trade_unions_add_post()
    data = copy(jsonpayload())
    mode = data["mode"]
    delete!(data,"mode")
    user = current_user()
    user_id = user.id
    if mode==0 # Create
        if user.verified
            existing_user_group_data = select_from_table(["users_trade_unions" => ["*"]], where_data=["user_id" => user_id])
            has_group = !isempty(existing_user_group_data)
            delete!(data,"group_id")
            group_id = insert_into_table("trade_unions",data, "RETURNING id")[1,1]
            if has_group
                user_trade_unions_id = existing_user_group_data[1,"id"]
                prev_group_id = existing_user_group_data[1,"group_id"]
                update_table("users_trade_unions",Dict("group_id" => group_id), where_data=["id" => user_trade_unions_id])
                members = select_from_table(["trade_unions" => ["members"]], where_data=["id" => prev_group_id])[1,1]
                if (members==1)
                    delete_from_table("trade_unions",["id" => prev_group_id])
                else
                    update_table("trade_unions",Dict("members" => members - 1), where_data=["id" => id])
                end
            else
                dict_users_trade_unions = Dict("user_id" => user.id, "group_id" => group_id)
                insert_into_table("users_trade_unions",dict_users_trade_unions)
            end
            compile("trade_unions")
        else
            data["status"] = 0
            data["user_id"] = user_id
            insert_into_table("trade_unions_requests",data)
        end
    elseif mode==1 # Join
        data["user_id"] = user_id
        if exist_in_table("users_trade_unions",["group_id" => data["group_id"]])
            if exist_in_table("trade_unions_requests",["user_id" => user_id])
                delete_from_table("trade_unions_requests",["user_id" => user_id])
            end
            data["status"] = 0
            insert_into_table("trade_unions_requests",data)
        else
            group_id = data["group_id"]
            members = select_from_table("trade_unions" => ["members"], where_data = ["id" => group_id])[1,1]
            dict = Dict("members" => members + 1)
            update_table("trade_unions",dict, where_data=["id" => group_id])
            dict_users_trade_unions = Dict("user_id" => user_id, "group_id" => group_id)
            insert_into_table("users_trade_unions",dict_users_trade_unions)
        end
        
    elseif mode==2 # Move
        existing_user_group_data = select_from_table(["users_trade_unions" => ["*"]], where_data=["user_id" => user_id])
        group_id = existing_user_group_data[1,"group_id"]
        delete!(data,"group_id")
        delete!(data,"members")
        delete!(data,"contact")
        update_table("trade_unions",data, where_data=["id" => group_id])
        compile("trade_unions")
    elseif mode==3 # Leave
        existing_user_group_data = select_from_table(["users_trade_unions" => ["*"]], where_data=["user_id" => user_id])
        if size(existing_user_group_data,1)==0
            if exist_in_table("trade_unions_requests",["user_id" => user_id])
                delete_from_table("trade_unions_requests",["user_id" => user_id])
            end
        else
            delete_from_table("users_trade_unions",["user_id" => user_id])
        end
    end
    return nothing
end

function get_user_trade_unions()
    local data_dicts
    user_id = get_authentication()
    trade_unions_ids = select_from_table("users_trade_unions" => ["group_id"], where_data = ["user_id" => user_id])[:,1]
    group_id = isempty(trade_unions_ids) ? nothing : trade_unions_ids[1]
    data_dicts = []
    if isnothing(group_id)
        local data
        data = select_from_table("trade_unions_requests" => ["*"], where_data = ["user_id" => user_id,"status" => 0])
        if size(data,1)==0
            data = select_from_table("trade_unions_requests" => ["*"], where_data = ["user_id" => user_id,"status" => 2])
            if size(data,1)!=0
                data = data[[end],:]
            end
        end
        for row in eachrow(data)
            dict =  Dict(zip(names(row),values(row)))
            if (!ismissing(row["group_id"]))
                extra_data = select_from_table("trade_unions" => ["*"], where_data = ["id" => row["group_id"]])
                merge!(dict, Dict(zip(names(extra_data[1,:]),values(extra_data[1,:]))))
            end
            push!(data_dicts, dict)
        end
    else
        group_data = select_from_table("trade_unions" => ["*"], where_data = ["id" => group_id])
        ns = names(group_data)
        data_dicts = map(x -> Dict(zip(ns,values(x))),eachrow(group_data))
    end
    return JSON3.write(data_dicts)
end

function get_group_requests()
    user_id = get_authentication()
    trade_unions_ids = select_from_table("users_trade_unions" => ["group_id"], where_data = ["user_id" => user_id])[:,1]
    group_id = isempty(trade_unions_ids) ? nothing : trade_unions_ids[1]
    data_dicts = []
    if !isnothing(group_id)
        user_ids = select_from_table("trade_unions_requests" => ["user_id"], where_data = ["group_id" => group_id, "status" => 0])[:,1]
        for user2_id in user_ids
            email = select_from_table("users" => ["email"], where_data = ["id" => user2_id])[1,1]
            push!(data_dicts,Dict("email" => email, "user_id" => user2_id))
        end
    end
    return JSON3.write(data_dicts)
end

function approve_request()
    data = copy(jsonpayload())
    user_id = get_authentication()
    trade_unions_ids = select_from_table("users_trade_unions" => ["group_id"], where_data = ["user_id" => user_id])[:,1]
    group_id = isempty(trade_unions_ids) ? nothing : trade_unions_ids[1]
    members = select_from_table("trade_unions" => ["members"], where_data = ["id" => group_id])[1,1]
    dict = Dict("members" => members + 1)
    update_table("trade_unions",dict, where_data=["id" => group_id])
    update_table("trade_unions_requests",Dict("status" => 1), where_data=["group_id" => group_id, "user_id" => data["user_id"]])
    dict_users_trade_unions = Dict("user_id" => data["user_id"], "group_id" => group_id)
    insert_into_table("users_trade_unions",dict_users_trade_unions)
    compile("trade_unions")
    return nothing
end

function reject_request()
    data = copy(jsonpayload())
    user_id = get_authentication()
    trade_unions_ids = select_from_table("users_trade_unions" => ["group_id"], where_data = ["user_id" => user_id])[:,1]
    group_id = isempty(trade_unions_ids) ? nothing : trade_unions_ids[1]
    update_table("trade_unions_requests",Dict("status" => 2), where_data=["group_id" => group_id, "user_id" => data["user_id"]])
    return nothing
end

function changeMemberCount()
    user_id = get_authentication()
    trade_unions_ids = select_from_table("users_trade_unions" => ["group_id"], where_data = ["user_id" => user_id])[:,1]
    group_id = isempty(trade_unions_ids) ? nothing : trade_unions_ids[1]
    data = copy(jsonpayload())
    update_table("trade_unions",data, where_data=["id" => group_id])
    compile("trade_unions")
end

function change_group()
    user_id = get_authentication()
    trade_unions_ids = select_from_table("users_trade_unions" => ["group_id"], where_data = ["user_id" => user_id])[:,1]
    group_id = isempty(trade_unions_ids) ? nothing : trade_unions_ids[1]
    if !isnothing(group_id)
        data = copy(jsonpayload())
        data_new = Dict()
        ks = keys(data)
        for x in ["members","contact"]
            if x in ks
                data_new[x] = data[x]
            end
        end
        if !isempty(data_new)
            update_table("trade_unions",data_new, where_data=["id" => group_id])
            compile("trade_unions")
        end
    end
    return nothing
end


end
