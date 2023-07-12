
using Genie.Router, Genie.Requests, Genie.Renderer.Json, JSON3
using Server.BasicController


#---Basic-----------------------------------------------------------

route("/:locale/manifesto/*", BasicController.manifesto, named = :manifest)

route("/:locale/join-us/*", BasicController.join_us, named = :join_us)

route("/:locale/groups/*", BasicController.groups, named = :groups)

route("/:locale/cooperatives/*", BasicController.cooperatives, named = :cooperatives)

route("/:locale/communes/*", BasicController.communes, named = :communes)

route("/:locale/parties/*", BasicController.parties, named = :parties)

route("/:locale/partners/*", BasicController.partners, named = :partners)

route("/:locale/political-compass/*", BasicController.political_compass, named = :political_compass)

route("/:locale/*", BasicController.landing, named = :landing)
