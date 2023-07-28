module CreateTableCooperatives

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:cooperatives) do
        [
            primary_key()
            column(:country, :string)
            column(:state, :string)
            column(:town, :string)
            column(:contact, :string)
            column(:latitude, :float)
            column(:longitude, :float)
            column(:workers, :int)
            column(:status, :string)
            column(:logo, :string)
            column(:name, :string)
            column(:market, :string)
            column(:website, :string)
            column(:description, :string)
        ]
    end
end

function down()
    drop_table(:cooperatives)
end

end