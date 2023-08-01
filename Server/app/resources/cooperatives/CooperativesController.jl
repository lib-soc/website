module CooperativesController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests, GenieAuthentication
using JSON3
using SearchLight
using Server.DatabaseSupport, Server.TemplateEditor

controller = "cooperatives"
dict_layouts = Dict(
    :cooperatives => generate_layout_html("main",controller,"cooperatives",libraries=["Leaflet"]),
    :cooperatives_add => generate_layout_html("main",controller,"cooperatives_add",libraries=["Leaflet"]),
)

#---Page info-----------------------------------------------------

const cooperatives_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Cooperatives",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Кооперативы",
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


function cooperatives_add()
    locale = get_locale()
    html(:cooperatives,:cooperatives_add, layout = dict_layouts[:cooperatives_add], context = @__MODULE__,
        title = cooperatives_info[locale][:title],
        description = cooperatives_info[locale][:description]
    )
end

function cooperatives()
    locale = get_locale()
    html(:cooperatives,:cooperatives, layout = dict_layouts[:cooperatives], context = @__MODULE__,
        title = cooperatives_info[locale][:title],
        description = cooperatives_info[locale][:description]
    )
end

function cooperatives_add_post()
    data = jsonpayload()
    insert_into_table("cooperatives_requests",data)
end

end
