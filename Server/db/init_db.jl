cd(@__DIR__)
cd("..")
@info pwd()

using Pkg
Pkg.activate(".")
Pkg.instantiate()

using SearchLight, SearchLightPostgreSQL
include("../lib/DatabaseSupport.jl")
using .DatabaseSupport
import SearchLight.query

#Connect to the database
SearchLight.Configuration.load() |> SearchLight.connect

# Initialize the database for Julia
#SearchLight.Migrations.create_migrations_table()

#DEBUG remove all tables
#SearchLight.Migration.all_down!!()
#DEBUG

#Load all tables and print status
#SearchLight.Migration.all_up!!(context=Server)
#SearchLight.Migration.status()


#---Create tables----------------------------------------------------

p = "db/migrations/"
files = readdir(p)
files = files[map(x -> x[end-1:end].=="jl", files)]
inds = map(x -> parse(Int64,split(x,"_")[1]), files)
inds_sorted = sortperm(inds)
files = files[inds_sorted]

for f in files
    try
        m = include(joinpath("migrations",f))
        m.up()
    catch
    end
end


#---Initialize Genie Authorization----------------------------------------------------

using GenieAuthorisation
using GenieAuthorisation: findone_or_create, save!, findone

# Create roles
for r in ["admin"]
    findone_or_create(Role, name = r) |> save!
end

# Create permissions
for p in ["verification"]
    findone_or_create(Permission, name = p) |> save!
end

assign_permission(findone(Role, name = "admin"), findone(Permission, name = "verification"))

# assign_role(findone(User, email = "user@user"), findone(Role, name = "admin"))
