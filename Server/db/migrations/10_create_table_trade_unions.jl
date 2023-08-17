module CreateTableTradeUnions

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

include("../../lib/DatabaseSupport.jl")
import .DatabaseSupport: add_foreign_key

function up()
    create_table(:trade_unions) do
        [
            primary_key()
            column(:country, :string)
            column(:state, :string)
            column(:town, :string)
            column(:contact, :string)
            column(:latitude, :float)
            column(:longitude, :float)
            column(:name, :string)
            column(:members, :int)
            column(:user_id, :int)
        ]
    end

    add_foreign_key(:trade_unions,:user_id,:users,:id)
    add_index(:trade_unions, :user_id)
end

function down()
    drop_table(:trade_unions)
end

end