module CreateTableUsersGroups

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

include("../../lib/DatabaseSupport.jl")
import .DatabaseSupport: add_foreign_key, add_index

function up()
    create_table(:users_groups) do
        [
            primary_key()
            column(:user_id, :int)
            column(:group_id, :int)
        ]
    end

    add_foreign_key(:users_groups,:user_id,:users,:id)
    add_foreign_key(:users_groups,:group_id,:groups,:id)
    add_index(:users_groups, :user_id)
    add_index(:users_groups, :group_id)
end

function down()
    drop_table(:users_groups)
end

end