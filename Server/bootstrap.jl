(pwd() != @__DIR__) && cd(@__DIR__) # allow starting app from bin/ dir

using Server
const UserApp = Server
Server.main()

@info "here"