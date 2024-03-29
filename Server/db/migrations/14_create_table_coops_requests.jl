module CreateTableCoopsRequests

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

include("../../lib/DatabaseSupport.jl")
using .DatabaseSupport

function up()
    create_table(:cooperatives_requests) do
        [
            primary_key()
            column(:id_given, :integer)
            column(:country, :string)
            column(:state, :string)
            column(:town, :string)
            column(:contact, :string)
            column(:latitude, :float)
            column(:longitude, :float)
            column(:verified, :bool)
            column(:added, :bool)
        ]
    end

    set_default("cooperatives_requests","verified",false)
    set_default("cooperatives_requests","added",false)
end

function down()
    drop_table(:cooperatives_requests)
end

end