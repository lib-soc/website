module EmailSupport

using Genie, Genie.Requests, Genie.Renderer.Json
using SMTPClient, JSON3, Random

export send_email

#--------------------------------------------------------------------

function send_email(receiver,subject,message)
    url = "smtps://mail.privateemail.com:465"
    rcpt = ["<"*receiver*">","<info@chrn.health>"]
    from = "<no-reply@chrn.health>"

    # Message body as RFC5322 within an IO
    to = [receiver]
    from = "no-reply@chrn.health"
    replyto = "Chiron <info@chrn.health>"
    body = get_body(to, from, subject, message; replyto)

    resp = send(url, rcpt, from, body, opt)
    return resp
end

# Load credentails
function load_credentials_inner(path)
    credentials_text = open(joinpath(path,"credentials.json")) do f
        read(f, String)
    end
    credentials_json = JSON3.read(credentials_text)
    opt.username = credentials_json[:username]
    opt.passwd = credentials_json[:password]
    return
end
function load_credentials(path)
    load_credentials_inner(path)
end
function load_credentials()
    path = @__DIR__
    load_credentials_inner(path)
end

opt = SendOptions(
    isSSL = true,
    username = "",
    passwd = ""
)

#--------------------------------------------------------------------

load_credentials()

end