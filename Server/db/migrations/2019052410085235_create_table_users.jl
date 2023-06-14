module CreateTableUsers

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:users) do
        [
            primary_key()
            column(:email, :string)
            column(:password, :string, limit = 100)
            column(:name, :string)
            column(:profile_picture, :int)
            column(:country, :int)
            column(:newsletter, :bool)
            column(:notifications, :int)
            column(:confirmation_code, :string)
        ]
    end

    add_index(:users, :email)
end

function down()
    drop_table(:users)
end

end