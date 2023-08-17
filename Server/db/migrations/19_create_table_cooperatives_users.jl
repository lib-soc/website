module CreateTableCooperativesUsers

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:cooperatives_users) do
        [
            primary_key()
            column(:user_id, :int)
            column(:cooperative_id, :int)
        ]
    end

    add_foreign_key(:cooperatives_users,:user_id,:users,:id)
    add_foreign_key(:cooperatives_users,:cooperative_id,:cooperatives,:id)
    add_index(:cooperatives_users, :user_id)
    add_index(:cooperatives_users, :cooperative_id)
end

function down()
    drop_table(:cooperatives_users)
end

end