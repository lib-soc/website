module CommunesController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests, GenieAuthentication
using JSON3
using SearchLight
using Server.DatabaseSupport, Server.TemplateEditor

controller = "communes"
dict_layouts = Dict(
    :communes => generate_layout_html("main",controller,"communes",libraries=["Leaflet"]),
    :communes_add => generate_layout_html("main",controller,"communes_add",libraries=["Leaflet"]),
)

#---Page info-----------------------------------------------------

const communes_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Communes",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Коммуны",
        :description => ""
    ),
    "fr" => Dict(
        :title => "LibSoc - Communes",
        :description => ""
    ),
    "ee" => Dict(
        :title => "LibSoc - Kommuunid",
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

function communes()
    locale = get_locale()
    html(:communes,:communes, layout = dict_layouts[:communes], context = @__MODULE__,
        title = communes_info[locale][:title],
        description = communes_info[locale][:description]
    )
end

function communes_add()
    locale = get_locale()
    html(:communes,:communes_add, layout = dict_layouts[:communes_add], context = @__MODULE__,
        title = communes_info[locale][:title],
        description = communes_info[locale][:description]
    )
end

function communes_add_post()
    data = jsonpayload()
    insert_into_table("communes_requests",data)
end

end
