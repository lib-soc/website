module PartiesController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests
using JSON3
using SearchLight
using Server.DatabaseSupport, Server.TemplateEditor

controller = "parties"
dict_layouts = Dict(
    :parties_add => generate_layout_html("main",controller,"parties_add",libraries=["Leaflet"]),
    :parties => generate_layout_html("main",controller,"parties",libraries=["Leaflet"]),
)

#---Page info-----------------------------------------------------

const parties_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Parties",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Партии",
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


function parties()
    locale = get_locale()
    html(:parties,:parties, layout = dict_layouts[:parties], context = @__MODULE__,
        title = parties_info[locale][:title],
        description = parties_info[locale][:description]
    )
end

function parties_add()
    locale = get_locale()
    html(:parties,:parties_add, layout = dict_layouts[:parties_add], context = @__MODULE__,
        title = parties_info[locale][:title],
        description = parties_info[locale][:description]
    )
end

function parties_add_post()
    data = jsonpayload()
    insert_into_table("parties_requests",data)
end

end
