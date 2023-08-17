module CreateTableTradeUnionsUsers

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:trade_unions_users) do
        [
            primary_key()
            column(:user_id, :int)
            column(:trade_union_id, :int)
        ]
    end

    add_foreign_key(:trade_unions_users,:user_id,:users,:id)
    add_foreign_key(:trade_unions_users,:trade_union_id,:trade_unions,:id)
    add_index(:trade_unions_users, :user_id)
    add_index(:trade_unions_users, :trade_union_id)
end

function down()
    drop_table(:trade_unions_users)
end

end