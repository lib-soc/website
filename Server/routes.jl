
using Genie.Router, Genie.Requests, Genie.Renderer.Json, JSON3
using Server.BasicController


#---Basic-----------------------------------------------------------

route("/", BasicController.landing, named = :landing)

route("/manifesto", BasicController.manifesto, named = :manifest)

route("/join-us", BasicController.join_us, named = :join_us)

route("/groups", BasicController.groups, named = :groups)

route("/cooperatives", BasicController.cooperatives, named = :cooperatives)

route("/communities", BasicController.communities, named = :communities)

