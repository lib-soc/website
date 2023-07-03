
using Genie.Router, Genie.Requests, Genie.Renderer.Json, JSON3
using Server.BasicController


#---Basic-----------------------------------------------------------

route("/:locale/manifesto", BasicController.manifesto, named = :manifest)
route("/manifesto", BasicController.manifesto)

route("/:locale/join-us", BasicController.join_us, named = :join_us)
route("/join-us", BasicController.join_us)

route("/:locale/groups", BasicController.groups, named = :groups)
route("/groups", BasicController.groups)

route("/:locale/cooperatives", BasicController.cooperatives, named = :cooperatives)
route("/cooperatives", BasicController.cooperatives)

route("/:locale/communities", BasicController.communities, named = :communities)
route("/communities", BasicController.communities)

route("/:locale/partners", BasicController.partners, named = :partners)
route("/partners", BasicController.partners)

route("/:locale", BasicController.landing, named = :landing)
route("/", BasicController.landing)
