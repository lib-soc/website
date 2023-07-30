module Users

using SearchLight, SearchLight.Validation, Server.UsersValidator
using SHA
using Random

export User

Base.@kwdef mutable struct User <: AbstractModel
    ### FIELDS
    id::DbId = DbId()
    email::String = ""
    password::String = ""
    google_id::String = ""
    confirmation_code::String = ""
    verified::Bool = false
end

Validation.validator(u::Type{User}) = ModelValidator([
    ValidationRule(:email,    UsersValidator.not_empty),
    ValidationRule(:email,    UsersValidator.unique),
    ValidationRule(:password, UsersValidator.not_empty)
])

function hash_password(password::String)
    sha256(password) |> bytes2hex
end

end