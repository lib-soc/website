module PartnersController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests, GenieAuthentication
using JSON3
using SearchLight
using Server.DatabaseSupport, Server.TemplateEditor

controller = "partners"
dict_layouts = Dict(
    :partners => generate_layout_html("main",controller,"partners",libraries=["Leaflet"]),
    :partners_add => generate_layout_html("main",controller,"partners_add",libraries=["Leaflet"]),
)

#---Page info-----------------------------------------------------

const partners_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Partners",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Партнеры",
        :description => ""
    ),
    "fr" => Dict(
        :title => "LibSoc - Partenaires",
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

function partners()
    locale = get_locale()
    html(:partners,:partners, layout = dict_layouts[:partners], context = @__MODULE__,
        title = partners_info[locale][:title],
        description = partners_info[locale][:description]
    )
end
function partners_add()
    locale = get_locale()
    html(:partners,:partners_add, layout = dict_layouts[:partners_add], context = @__MODULE__,
        title = partners_info[locale][:title],
        description = partners_info[locale][:description]
    )
end

function partners_add_post()
    data = jsonpayload()
    insert_into_table("partners_requests",data)
end

end
