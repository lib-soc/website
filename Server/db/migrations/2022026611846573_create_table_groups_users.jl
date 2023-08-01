module CreateTableGroupsUsers

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:groups_users) do
        [
            primary_key()
            column(:user_id, :int)
            column(:group_id, :int)
        ]
    end

    add_foreign_key(:groups_users,:user_id,:users,:id)
    add_foreign_key(:groups_users,:group_id,:groups,:id)
    add_index(:groups_users, :user_id)
    add_index(:groups_users, :group_id)
end

function down()
    drop_table(:groups_users)
end

end