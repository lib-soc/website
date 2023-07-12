module BasicController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests
using JSON3
using SearchLight
using Server.DatabaseSupport, Server.TemplateEditor

controller = "basic"
dict_layouts = Dict(
    :landing => generate_layout_html("main",controller,"landing",css=["landing"],libraries=["Leaflet"]),
    :manifesto => generate_layout_html("main",controller,"manifesto"),
    :join_us => generate_layout_html("main",controller,"join_us",libraries=["Leaflet"]),
    :groups => generate_layout_html("main",controller,"groups",libraries=["Leaflet"]),
    :cooperatives => generate_layout_html("main",controller,"cooperatives",libraries=["Leaflet"]),
    :communes => generate_layout_html("main",controller,"communes",libraries=["Leaflet"]),
    :parties => generate_layout_html("main",controller,"parties",libraries=["Leaflet"]),
    :partners => generate_layout_html("main",controller,"partners",libraries=["Leaflet"]),
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

const communes_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Communes",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Коммуны",
        :description => ""
    )
)

const partners_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Partners",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Партнеры",
        :description => ""
    )
)

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

function join_us()
    locale = get_locale()
    html(:basic,:join_us, layout = dict_layouts[:join_us], context = @__MODULE__,
        title = join_us_info[locale][:title],
        description = join_us_info[locale][:description]
    )
end

function groups()
    locale = get_locale()
    html(:basic,:groups, layout = dict_layouts[:groups], context = @__MODULE__,
        title = groups_info[locale][:title],
        description = groups_info[locale][:description]
    )
end

function cooperatives()
    locale = get_locale()
    html(:basic,:cooperatives, layout = dict_layouts[:cooperatives], context = @__MODULE__,
        title = cooperatives_info[locale][:title],
        description = cooperatives_info[locale][:description]
    )
end

function communes()
    locale = get_locale()
    html(:basic,:communes, layout = dict_layouts[:communes], context = @__MODULE__,
        title = communes_info[locale][:title],
        description = communes_info[locale][:description]
    )
end

function partners()
    locale = get_locale()
    html(:basic,:partners, layout = dict_layouts[:partners], context = @__MODULE__,
        title = partners_info[locale][:title],
        description = partners_info[locale][:description]
    )
end

function parties()
    locale = get_locale()
    html(:basic,:parties, layout = dict_layouts[:parties], context = @__MODULE__,
        title = parties_info[locale][:title],
        description = parties_info[locale][:description]
    )
end

function political_compass()
    locale = get_locale()
    html(:basic,:compass, layout = dict_layouts[:compass], context = @__MODULE__,
        title = compass_info[locale][:title],
        description = compass_info[locale][:description]
    )
end

end