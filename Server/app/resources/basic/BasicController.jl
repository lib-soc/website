module BasicController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests
using JSON3
using SearchLight
using Server.DatabaseSupport, Server.TemplateEditor

controller = "basic"
dict_layouts = Dict(
    :landing => generate_layout_html("main",controller,"landing",css=["landing"]),
    :manifesto => generate_layout_html("main",controller,"manifesto"),
    :join_us => generate_layout_html("main",controller,"join_us"),
    :groups => generate_layout_html("main",controller,"groups"),
    :cooperatives => generate_layout_html("main",controller,"cooperatives"),
    :communities => generate_layout_html("main",controller,"communities"),
)

#---General-----------------------------------------------------


function landing()
    html(:basic,:landing, layout = dict_layouts[:landing], context = @__MODULE__,
        title = "LibSoc",
        description = ""
    )
end

function manifesto()
    html(:basic,:manifesto, layout = dict_layouts[:manifesto], context = @__MODULE__,
        title = "LibSoc - Manifesto",
        description = ""
    )
end

function join_us()
    html(:basic,:join_us, layout = dict_layouts[:join_us], context = @__MODULE__,
        title = "LibSoc - Join us",
        description = ""
    )
end

function groups()
    html(:basic,:groups, layout = dict_layouts[:groups], context = @__MODULE__,
        title = "LibSoc - Groups",
        description = ""
    )
end

function cooperatives()
    html(:basic,:cooperatives, layout = dict_layouts[:cooperatives], context = @__MODULE__,
        title = "LibSoc - Cooperatives",
        description = ""
    )
end

function communities()
    html(:basic,:communities, layout = dict_layouts[:communities], context = @__MODULE__,
        title = "LibSoc - Communities",
        description = ""
    )
end


end