module CreateTablePartiesUsers

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:parties_users) do
        [
            primary_key()
            column(:user_id, :int)
            column(:party_id, :int)
        ]
    end

    add_foreign_key(:parties_users,:user_id,:users,:id)
    add_foreign_key(:parties_users,:party_id,:parties,:id)
    add_index(:parties_users, :user_id)
    add_index(:parties_users, :party_id)
end

function down()
    drop_table(:parties_users)
end

end