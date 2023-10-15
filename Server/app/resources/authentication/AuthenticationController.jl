module AuthenticationController

using Genie, Genie.Requests, Genie.Renderer, Genie.Renderer.Json, Genie.Renderer.Html, GenieSession, SearchLight, GenieAuthentication, GenieAuthorisation
using Logging
using JSON3, Random, Base64, HTTP, Dates
using Server.Users, Server.EmailSupport, Server.TemplateEditor, Server.Cookies, Server.DatabaseSupport
import Server.TemplateEditor.generate_layout_html
import Server.DatabaseSupport.select_from_table
using JWTs

#---Helpers----------------------------------------------------------

const keyset = JWKSet("https://www.googleapis.com/oauth2/v3/certs")
refresh!(keyset)

current_user() = findone(Users.User, id = get_authentication())

function send_signup_confirmation_email(receiver,confirmation_code) 
    subject,message = ["Sign-up confirmation","Hello!\r\nYour confirmation code is "*confirmation_code*"\r\n"]
    message = "Content-Type: text/html\r\n"*message
    return send_email(receiver,subject,message)
end

function register_google()
    jws = rawpayload()
    jws_split = split(jws,".")
    payload_encoded = jws_split[2]
    rem = length(payload_encoded)%4
    if rem!= 0
        payload_encoded = payload_encoded* "="^(4-rem)
    end
    payload = String(base64decode(payload_encoded))
    json = JSON3.read(payload)
    sub = json[:sub]
    email = json[:email]
    user = findone(User, email = email)
    if isnothing(user)
        # ENABLE WHEN IN PRODUCTION
        user = User(email = email,google_id = sub) |> save!
        authenticate(user.id, GenieSession.session(params()))
        assign_role(user, findone(Role, name = "free"))
        save(user)
        return true
        return 0
    else
        jwt = JWT(payload="")
        jwt.header = jws_split[1]
        jwt.payload = jws_split[2]
        jwt.signature = jws_split[3]
        if validate!(jwt, keyset)
            if user.google_id==""
                user.google_id = sub
                save(user)
                authenticate(user.id, GenieSession.session(params()))
                return 3
            elseif user.google_id==sub
                authenticate(user.id, GenieSession.session(params()))
                return 3
            else
                return 0
            end
        else
            return 0
        end
    end
end

function get_locale()
    data = payload()
    if :locale in keys(data)
        return data[:locale]
    else
        return "en"
    end
end

const auth_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Login/Sign Up",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Логин/Регистрация",
        :description => ""
    ),
    "fr" => Dict(
        :title => "LibSoc - Connexion/Inscription",
        :description => ""
    ),
    "ee" => Dict(
        :title => "LibSoc - Logi sisse",
        :description => ""
    )
)

const reset_password_info = Dict(
    "en" => Dict(
        :title => "LibSoc - Reset password",
        :description => ""
    ),
    "ru" => Dict(
        :title => "LibSoc - Восстановление пароля",
        :description => ""
    ),
    "fr" => Dict(
        :title => "LibSoc - Réinitialiser le mot de passe",
        :description => ""
    ),
    "ee" => Dict(
        :title => "LibSoc - Parooli lähtestamine",
        :description => ""
    )
)


#---Routing functions---------------------------------------------------

controller = "authentication"
const dict_layouts = Dict(
    :auth => generate_layout_html("main",controller,"auth",libraries=["GoogleAuth"]),
    :profile => generate_layout_html("main",controller,"profile",libraries=["Leaflet"]),
    :email_confirmation => generate_layout_html("main",controller,"email_confirmation"),
    :reset_password => generate_layout_html("main",controller,"reset_password")
)

function auth()
    locale = get_locale()
    set_cookies(params())
    html(:authentication,:auth, layout = dict_layouts[:auth], context = @__MODULE__,
        title = auth_info[locale][:title],
        description = auth_info[locale][:description]
    )
end

function profile()
    set_cookies(params())
    html(:authentication,:profile, layout = dict_layouts[:profile], context = @__MODULE__,
        title = "Chiron | Profile",
        description = ""
    )
end

function email_confirmation()
    set_cookies(params())
    html(:authentication,:email_confirmation, layout = dict_layouts[:email_confirmation], context = @__MODULE__,
        title = "Chiron | Email Confirmation",
        description = ""
    )
end

function reset_password()
    locale = get_locale()
    set_cookies(params())
    html(:authentication,:reset_password, layout = dict_layouts[:reset_password], context = @__MODULE__,
        title = reset_password_info[locale][:title],
        description = reset_password_info[locale][:description]
    )
end

function confirm_email()
    code = rawpayload()
    user = current_user()
    if code==user.confirmation_code
        GenieAuthorisation.Relationship!(user, findone(Role, name = "unconfirmed")) |> delete
        assign_role(user, findone(Role, name = "free"))
        return true
    else
        return false
    end
end

function register()
    data = jsonpayload()
    user = findone(User, email = data["email"])
    if isnothing(user)
        user = User(email = data["email"],
            password = data["password"] |> Users.hash_password,
            ) |> save!
        authenticate(user.id, GenieSession.session(params()))
        confirmation_code = randstring('0':'9', 5)
        user.confirmation_code = confirmation_code
        save(user)
        #send_signup_confirmation_email(data["email"],confirmation_code)
        return true
    else
        return false
    end
end

function login()
    data = jsonpayload()
    user = findone(User, email = data["email"])
    if isnothing(user)
        return 0
    else
        if (user.password==Users.hash_password(data["password"]))
            authenticate(user.id, GenieSession.session(params()))
            return 2
        else
            return 1
        end
    end
end

function logout()
    deauthenticate(GenieSession.session(params()))
    return
end

function change_user()
    data = jsonpayload()
    user = findone(Users.User, id = get_authentication())
    for (field,value) in data
        setfield!(user, Symbol(field), value)
    end
    save(user)
    return JSON3.write(true)
end

function get_user()
    try
        user = findone(Users.User, id = get_authentication())
        return JSON3.write(user)
    catch ex
        return JSON3.write(false)
    end
end

end