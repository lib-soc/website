module CreateTableCommunesUsers

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:communes_users) do
        [
            primary_key()
            column(:user_id, :int)
            column(:commune_id, :int)
        ]
    end

    add_foreign_key(:communes_users,:user_id,:users,:id)
    add_foreign_key(:communes_users,:commune_id,:communes,:id)
    add_index(:communes_users, :user_id)
    add_index(:communes_users, :commune_id)
end

function down()
    drop_table(:communes_users)
end

end