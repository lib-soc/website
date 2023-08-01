using Genie

import Server.AuthenticationController
import Server.Users
import SearchLight: findone

export current_user
current_user() = findone(Users.User, id = get_authentication())