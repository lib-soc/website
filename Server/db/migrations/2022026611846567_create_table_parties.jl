module CreateTableParties

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:parties) do
        [
            primary_key()
            column(:country, :string)
            column(:latitude, :float)
            column(:longitude, :float)
            column(:logo, :string)
            column(:name, :string)
            column(:website, :string)
            column(:contact, :string)
            column(:description, :string)
            column(:members, :string)
        ]
    end
end

function down()
    drop_table(:parties)
end

end