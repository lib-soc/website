module CreateTableGroups

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:groups) do
        [
            primary_key()
            column(:country, :string)
            column(:state, :string)
            column(:town, :string)
            column(:contact, :string)
            column(:latitude, :float)
            column(:longitude, :float)
            column(:members, :int)
            column(:user_id, :int)
        ]
    end

    add_foreign_key(:groups,:user_id,:users,:id)
    add_index(:groups, :user_id)
end

function down()
    drop_table(:groups)
end

end