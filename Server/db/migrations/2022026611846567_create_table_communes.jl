module CreateTableCommunes

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

function up()
    create_table(:communes) do
        [
            primary_key()
            column(:country, :string)
            column(:state, :string)
            column(:town, :string)
            column(:contact, :string)
            column(:latitude, :float)
            column(:longitude, :float)
            column(:members, :int)
            column(:status, :string)
        ]
    end
end

function down()
    drop_table(:communes)
end

end