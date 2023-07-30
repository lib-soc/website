module GroupsController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests, GenieAuthentication
using JSON3
using SearchLight
using Server.DatabaseSupport, Server.TemplateEditor
import Server.DatabaseSupport: select_from_table

controller = "groups"
dict_layouts = Dict(
    :groups => generate_layout_html("main",controller,"groups",libraries=["Leaflet"]),
    :groups_add => generate_layout_html("main",controller,"groups_add",libraries=["Leaflet"]),
)

#---Page info-----------------------------------------------------

const groups_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Groups",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Группы",
        :description => ""
    )
)

function get_locale()
    data = payload()
    if :locale in keys(data)
        return data[:locale]
    else
        return "en"
    end
end

#---Functions---------------------------------------------------------

function groups()
    locale = get_locale()
    html(:groups,:groups, layout = dict_layouts[:groups], context = @__MODULE__,
        title = groups_info[locale][:title],
        description = groups_info[locale][:description]
    )
end

function groups_add()
    locale = get_locale()
    html(:groups,:groups_add, layout = dict_layouts[:groups_add], context = @__MODULE__,
        title = groups_info[locale][:title],
        description = groups_info[locale][:description]
    )
end

function groups_add_post()
    data = jsonpayload()
    insert_into_table("groups_requests",data)
end

function get_user_groups()
    user_id = get_authentication()
    data = select_from_table("groups" => ["*"], 
                where_data = ["user_id" => user_id])
    ns = names(data)
    data_dict = map(x -> Dict(zip(ns,values(x))),eachrow(data))
    return JSON3.write(data_dict)
end

end
