module AdminController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests, GenieAuthentication, DataFrames, GenieAuthorisation
using JSON3
using SearchLight,SearchLightPostgreSQL, LibPQ, JSON3
using Server.DatabaseSupport, Server.TemplateEditor, Server.Users
import Server.DatabaseSupport: select_from_table, insert_into_table, delete_from_table, exist_in_table

controller = "admin"
dict_layouts = Dict(
    :admin_panel => generate_layout_html("main",controller,"admin_panel"),
)

#---Page info-----------------------------------------------------

const admin_panel_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Admin panel",
        :description => ""
    ),
    "ru" => Dict(
        :title => "",
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

function admin_panel()
    @info has_permission(current_user(), "verification")
    @info current_user()
    if has_permission(current_user(), "verification")
        locale = get_locale()
        html(:admin,:admin_panel, layout = dict_layouts[:admin_panel], context = @__MODULE__,
            title = admin_panel_info[locale][:title],
            description = admin_panel_info[locale][:description]
        )
    end
end

function verify()
    if has_permission(current_user(), "verification")
        data = copy(jsonpayload())
        user_id = data["user_id"]
        update_table("users",Dict("verified" => true), where_data=["id" => user_id])
        return nothing
    end
end

function get_unverified_users()
    if has_permission(current_user(), "verification")
        users = select_from_table("users" => ["id","email"], where_data = ["verified" => false])
        data = []
        if size(users,1)!=0
            for x in eachrow(users)
                dict = Dict("user_id" => x["id"],"email" => x["email"])
                push!(data, dict)
            end
        end
        return JSON3.write(data)
    end
end

function add_verified_groups()
    if has_permission(current_user(), "admin")
        groups_create_requests_verified = select_from_table("groups_requests" => ["*"], where_data = ["group_id" => nothing, "status" => 1])
        if size(groups_create_requests_verified,1)!=0
            data = Dict(zip(names(groups_create_requests_verified),groups_create_requests_verified[end,:]))
            user_id = data["user_id"]
            delete!(data,"group_id")
            delete!(data,"user_id")
            delete!(data,"id")
            delete!(data,"status")
            group_id = insert_into_table("groups",data, "RETURNING id")[1,1]
            dict_users_groups = Dict("user_id" => user_id, "group_id" => group_id)
            insert_into_table("users_groups",dict_users_groups)
            delete_from_table("groups_requests",["user_id" => user_id])
        end
        compile("groups")
    end
end

end
