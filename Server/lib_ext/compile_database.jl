
using SearchLight, SearchLightPostgreSQL, LibPQ, JSON3
using DataFrames
include("../lib/DatabaseSupport.jl")
using .DatabaseSupport

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

function compile_groups()
    df = select_from_table(["groups" => ["*"]])
    table_to_json("groups",df)
end

function move_requests()
    df_requests = select_from_table(["groups_requests" => ["*"]], where_data=["verified" => true, "added" => false])
    df = select_from_table(["groups" => ["*"]])
    latitudes = df.latitude
    longitudes = df.longitude
    for df_row in eachrow(df_requests)
        ind_id_given = ismissing(df_row.id_given) ? nothing : findfirst(df_row.id_given.==df.id)
        if (!isnothing(ind_id_given))
            id = df[ind_id_given,:id]
            row_found = df[ind_id_given,Not(:id)]
            dict = Dict(zip(names(row_found),values(row_found)))
            dict["members"] += 1
            update_table("groups",dict, where_data=["id" => id])
        else
            id = df_row.id
            dict_update = Dict("added" => true)
            update_table("groups_requests",dict_update, where_data=["id" => id])

            df_row_to_add = df_row[Not(:id_given)]
            df_row_to_add = df_row_to_add[Not(:verified)]
            df_row_to_add = df_row_to_add[Not(:added)]
            df_row_to_add = df_row_to_add[Not(:id)]
            dict = Dict(zip(names(df_row_to_add),values(df_row_to_add)))
            dict["members"] = 1
            insert_into_table("groups",dict)
        end
    end
end


move_requests()
compile_groups()
