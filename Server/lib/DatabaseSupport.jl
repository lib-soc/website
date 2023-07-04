
module DatabaseSupport
#=
using SearchLight, SearchLightPostgreSQL, LibPQ
using DataFrames

export exist_in_table, insert_into_table, update_table, select_from_table, add_foreign_key


options = SearchLight.Configuration.read_db_connection_data("db/connection.yml")
conn = SearchLight.connect(options)

function insert_into_table(table_name,dict_values)
    names_string = join(keys(dict_values),", ")
    vals_raw = values(dict_values)
    vals = map(x -> (x isa String) || (x isa Symbol) ? string("'",x,"'") : x,vals_raw)
    vals_string = join(values(vals),", ")
    query = "INSERT INTO $table_name ($names_string) VALUES ($vals_string)"
    SearchLight.query(query)
    return nothing
end

function update_table(table_name,dict_values; where_data=nothing)
    ns = collect(keys(dict_values))
    vals_raw = values(dict_values)
    vals = map(x -> x isa String ? string("'",x,"'") : x,vals_raw)
    ns_vals = join(map((x,y) -> string(x, " = ",y),ns,vals),", ")

    query = "UPDATE $table_name SET $ns_vals"
    if !isnothing(where_data)
        query *= where_query(where_data)
    end

    cur = SearchLight.query(query)
    return DataFrame(cur)
end

function where_query(pair::Pair)
    return " WHERE $(pair[1]) = $(pair[2])"
end

function where_query(data::Vector{<:Pair})
    conds = String[]
    for pair in data
        push!(conds,"$(pair[1]) = $(pair[2])")
    end
    query = " WHERE "*join(conds," AND ")
    return query
end

function join_query(data::Vector{<:Vector},table_name)
    query = ""
    for v in data
        table_join = v[1]
        column_join = v[2]
        column2_join = v[3]
        query *= " JOIN $table_join ON $(table_name).$(column_join) = $(table_join).$(column2_join)"
    end
    return query
end

function join_query(data::Vector{<:Union{String,Symbol}},table_name)
    table_join = data[1]
    column_join = data[2]
    column2_join = data[3]
    query = " JOIN $table_join ON $(table_name).$(column_join) = $(table_join).$(column2_join)"
    return query
end

function select_query(table::Pair)
    table_name = table[1]
    cols = table[2]
    if isnothing(cols)
        cols_query = "*"
    else
        cols_query = join(cols,", ")
    end
    query = "SELECT $cols_query FROM $table_name"
    return query
end

function as_query(table_name,col_name::Symbol)
    return table_name*"."*String(col_name)
end

function as_query(table_name,col_name::String)
    return table_name*"."*col_name
end

function as_query(table_name,col_name::Pair)
    return table_name*"."*col_name[1]*" AS "*col_name[2]
end

function select_query(tables::Vector{<:Pair})
    tables_query_ar = String[]
    cols_query_ar = String[]
    for table in tables
        table_name = table[1]
        cols = table[2]
        push!(tables_query_ar,table_name)
        if isnothing(cols)
            push!(cols_query_ar, table_name*".*")
        else
            push!(cols_query_ar, join(map(col_name -> as_query(table_name,col_name),cols),", "))
        end
    end
    tables_query = join(tables_query_ar,", ")
    cols_query = join(cols_query_ar,", ")
    query = "SELECT $cols_query FROM $(tables_query)"
    return query
end

function select_from_table(tables; where_data = nothing)
    query = select_query(tables)

    if !isnothing(where_data)
        query *= where_query(where_data)
    end

    cur = SearchLight.query(query)
    return DataFrame(cur)
end

function exist_in_table(table_name,where_data)
    cur = SearchLight.query("SELECT * FROM $table_name "*where_query(where_data)*" LIMIT 1")
    t = DataFrame(cur)
    return size(t,1)>0
end

function add_foreign_key(table,name,table2,name2)
    query = """
    ALTER TABLE $table
    ADD CONSTRAINT fk_$(table)_$(table2)_$(name) FOREIGN KEY ($name) REFERENCES $table2 ($name2);"""
    SearchLight.query(query)
end
=#
end
