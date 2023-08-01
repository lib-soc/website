module CreateTableGroupsRequests

import SearchLight.Migrations: create_table, column, primary_key, add_index, drop_table

include("../../lib/DatabaseSupport.jl")
using .DatabaseSupport
import .DatabaseSupport: add_foreign_key, set_default

function up()
    create_table(:groups_requests) do
        [
            primary_key()
            column(:group_id, :integer)
            column(:user_id, :integer)
            column(:country, :string)
            column(:state, :string)
            column(:town, :string)
            column(:contact, :string)
            column(:latitude, :float)
            column(:longitude, :float)
            column(:longitude, :float)
            column(:members,:integer)
            column(:added, :bool)
            column(:status,:Integer)
        ]
    end

    add_foreign_key(:groups_requests,:user_id,:users,:id)
    add_foreign_key(:groups_requests,:group_id,:groups,:id)

    add_index(:groups_requests, :user_id)

    set_default("groups_requests","added",false)

end

function down()
    drop_table(:groups_requests)
end

end