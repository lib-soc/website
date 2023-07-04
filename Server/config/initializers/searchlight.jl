#=
using SearchLight
using Genie

function Genie.Renderer.Json.JSON3.StructTypes.StructType(::Type{T}) where {T<:SearchLight.AbstractModel}
  Genie.Renderer.Json.JSON3.StructTypes.Struct()
end

function Genie.Renderer.Json.JSON3.StructTypes.StructType(::Type{SearchLight.DbId})
  Genie.Renderer.Json.JSON3.StructTypes.Struct()
end

function foreign_key(name, table,name2)
  return string("FOREIGN KEY (`",name,"`) REFERENCES `",table,"`(`",name2,"`) ON DELETE CASCADE")
end

SearchLight.Configuration.load(context = @__MODULE__)
SearchLight.connect()
=#