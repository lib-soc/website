module CreateTablePartners

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:partners) do
        [
            primary_key()
            column(:country, :string)
            column(:state, :string)
            column(:town, :string)
            column(:contact, :string)
            column(:latitude, :float)
            column(:longitude, :float)
            column(:logo, :string)
            column(:name, :string)
            column(:website, :string)
            column(:description, :string)
        ]
    end
end

function down()
    drop_table(:partners)
end

end