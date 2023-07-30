module Cookies

using HTTP, Dates, Genie

export set_cookies, set_remember, remove_remember

function set_cookies(params)
    request = params[:REQUEST]
    response = params[:RESPONSE]
    if !occursin("__genierememberme",string(request))
        headers = Genie.Responses.getheaders(response)
        headers["Set-Cookie"] = replace(headers["Set-Cookie"],"Max-Age=2592000;" => "")
        Genie.Responses.setheaders!(response,headers)
    end
end
#=
function set_remember(params)
    #cookie_remember = HTTP.Cookies.Cookie("__genieremember",  params[:SESSION].id, path="/", expires=now() + Dates.Month(1), httponly=true,samesite=HTTP.Cookies.SameSiteLaxMode)
    #HTTP.Cookies.addcookie!(params[:RESPONSE],cookie_remember)
end

function remove_remember(params)
    #cookie_remember = HTTP.Cookies.Cookie("__genieremember",  params[:SESSION].#id, path="/", httponly=true,samesite=HTTP.Cookies.SameSiteLaxMode)
    #HTTP.Cookies.addcookie!(params[:RESPONSE],cookie_remember)
end
=#
end