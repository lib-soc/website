module BasicController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests, GenieAuthentication
using JSON3
using SearchLight
using Server.DatabaseSupport, Server.TemplateEditor

controller = "basic"
dict_layouts = Dict(
    :landing => generate_layout_html("main",controller,"landing",css=["landing"],libraries=["Leaflet"]),
    :manifesto => generate_layout_html("main",controller,"manifesto"),
    :join_us => generate_layout_html("main",controller,"join_us",libraries=["Leaflet"]),
    :compass => generate_layout_html("main",controller,"compass"),
)

#---Page info-----------------------------------------------------

const landing_info = Dict(
    "en" => Dict(
        :title => "LibSoc - A Global Network of Libertarian Socialists",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Глобальная сеть либертарных социалистов",
        :description => ""
    ),
)

const manifesto_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Manifesto",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Манифест",
        :description => ""
    )
)

const join_us_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Manifesto",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Присоединяйся",
        :description => ""
    ),
)

const compass_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Political Compass",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Политический компас",
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

function landing()
    locale = get_locale()
    html(:basic,:landing, layout = dict_layouts[:landing], context = @__MODULE__,
        title = landing_info[locale][:title],
        description = landing_info[locale][:description]
    )
end

function manifesto()
    locale = get_locale()
    html(:basic,:manifesto, layout = dict_layouts[:manifesto], context = @__MODULE__,
        title = manifesto_info[locale][:title],
        description = manifesto_info[locale][:description]
    )
end

function political_compass()
    locale = get_locale()
    html(:basic,:compass, layout = dict_layouts[:compass], context = @__MODULE__,
        title = compass_info[locale][:title],
        description = compass_info[locale][:description]
    )
end

function join_us()
    locale = get_locale()
    html(:basic,:join_us, layout = dict_layouts[:join_us], context = @__MODULE__,
        title = join_us_info[locale][:title],
        description = join_us_info[locale][:description]
    )
end

end
