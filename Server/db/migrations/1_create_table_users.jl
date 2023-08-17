module CreateTableUsers

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:users) do
        [
            primary_key()
            column(:email, :string)
            column(:password, :string, limit = 100)
            column(:confirmation_code, :string)
            column(:google_id, :string)
            column(:verified, :bool)
        ]
    end

    add_index(:users, :email)
end

function down()
    drop_table(:users)
end

end