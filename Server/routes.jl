
using Genie.Router, Genie.Requests, Genie.Renderer.Json, JSON3, GenieAuthentication
using Server.GroupsController

#---Basic-----------------------------------------------------------

route("/:locale/*", BasicController.landing, named = :landing)

route("/:locale/manifesto/*", BasicController.manifesto, named = :manifest)

route("/:locale/join-us/*", BasicController.join_us, named = :join_us)

route("/:locale/political-compass/*", BasicController.political_compass, named = :political_compass)

#---Authentication and such------------------------------------------

route("/:locale/auth/*", AuthenticationController.auth, named = :auth)

route("/:locale/check-login", authenticated, named=:checklogin)

route("/:locale/login-post", AuthenticationController.login, method = POST)

route("/:locale/logout", AuthenticationController.logout)

route("/:locale/signup-post", AuthenticationController.register, method = POST)

route("/:locale/signup-google", AuthenticationController.register_google, method = POST)

route("/:locale/change-user", AuthenticationController.change_user, method = POST)

route("/:locale/get-user", AuthenticationController.get_user)

route("/:locale/confirm-email", AuthenticationController.confirm_email, method = POST)

route("/:locale/email-confirmation", AuthenticationController.email_confirmation, named = :email_confirmation)

route("/:locale/profile", AuthenticationController.profile, named = :profile)

route("/:locale/reset-password", AuthenticationController.reset_password, named = :reset_password)

#---Groups----------------------------------------------------------

route("/:locale/groups/*", GroupsController.groups, named = :groups)

route("/:locale/groups-add-post/*", GroupsController.groups_add_post, method = POST, named = :groups_add_post)

route("/:locale/get-user-groups/*", GroupsController.get_user_groups, named = :get_user_groups)

route("/:locale/get-group-requests/*", GroupsController.get_group_requests, named = :get_group_requests)

route("/:locale/group-approve-request/*", GroupsController.approve_request, method = POST, named = :group_approve_request)

route("/:locale/group-reject-request/*", GroupsController.reject_request, method = POST, named = :group_reject_request)

route("/:locale/group-change/*", GroupsController.change_group, method = POST, named = :group_change)

route("/:locale/add-verified-groups/*", GroupsController.add_verified_groups, named = :add_verified_groups)

route("/:locale/add-verified-groups/*", GroupsController.add_verified_groups, named = :add_verified_groups)

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