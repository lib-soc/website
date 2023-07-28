
using Genie.Router, Genie.Requests, Genie.Renderer.Json, JSON3
using Server.BasicController


#---Basic-----------------------------------------------------------

route("/:locale/*", BasicController.landing, named = :landing)

route("/:locale/manifesto/*", BasicController.manifesto, named = :manifest)

route("/:locale/join-us/*", BasicController.join_us, named = :join_us)

route("/:locale/political-compass/*", BasicController.political_compass, named = :political_compass)

#---Groups----------------------------------------------------------

route("/:locale/groups/*", GroupsController.groups, named = :groups)

route("/:locale/groups-add/*", GroupsController.groups_add, named = :groups_add)

route("/:locale/groups-add-post/*", GroupsController.groups_add_post, method = POST, named = :groups_add_post)

#---Coops----------------------------------------------------------

route("/:locale/cooperatives/*", CooperativesController.cooperatives, named = :cooperatives)

route("/:locale/cooperatives-add/*", CooperativesController.cooperatives_add, named = :cooperatives_add)

route("/:locale/cooperatives-add-post/*", CooperativesController.cooperatives_add_post, method = POST, named = :cooperatives_add_post)

#---Communes----------------------------------------------------------

route("/:locale/communes/*", CommunesController.communes, named = :communes)

route("/:locale/communes-add/*", CommunesController.communes_add, named = :communes_add)

route("/:locale/communes-add-post/*", CommunesController.communes_add_post, method = POST, named = :communes_add_post)

#---Parties----------------------------------------------------------

route("/:locale/parties/*", PartiesController.parties, named = :parties)

route("/:locale/parties-add/*", PartiesController.parties_add, named = :parties_add)

route("/:locale/parties-add-post/*", PartiesController.parties_add_post, method = POST, named = :parties_add_post)

#---Partners---------------------------------------------------------

route("/:locale/partners/*", PartnersController.partners, named = :partners)

route("/:locale/partners-add/*", PartnersController.partners_add, named = :partners_add)

route("/:locale/partners-add-post/*", PartnersController.partners_add_post, method = POST, named = :partners_add_post)