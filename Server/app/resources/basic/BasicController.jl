module BasicController

using Genie, Genie.Renderer, Genie.Renderer.Html, Genie.Requests
using JSON3
using SearchLight
using Server.DatabaseSupport, Server.TemplateEditor

controller = "basic"
dict_layouts = Dict(
    :landing => generate_layout_html("main",controller,"landing",css=["landing"]),
)

#---General-----------------------------------------------------


function landing()
    html(:basic,:landing, layout = dict_layouts[:landing], context = @__MODULE__,
        title = "LibSoc",
        description = ""
    )
end


end