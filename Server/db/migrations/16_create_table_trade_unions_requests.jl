module CreateTableTradeUnionsRequests

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

include("../../lib/DatabaseSupport.jl")
using .DatabaseSupport
import .DatabaseSupport: add_foreign_key, set_default

function up()
    create_table(:trade_unions_requests) do
        [
            primary_key()
            column(:group_id, :integer)
            column(:user_id, :integer)
            column(:country, :string)
            column(:state, :string)
            column(:town, :string)
            column(:contact, :string)
            column(:latitude, :float)
            column(:longitude, :float)
            column(:members,:integer)
            column(:name,:string)
            column(:status,:integer)
        ]
    end

    add_foreign_key(:trade_unions_requests,:user_id,:users,:id)
    add_foreign_key(:trade_unions_requests,:group_id,:trade_unions,:id)

    add_index(:trade_unions_requests, :user_id)

end

function down()
    drop_table(:trade_unions_requests)
end

end