module TemplateEditor

using JSON3, Genie, Unicode
import Unicode.normalize

export generate_layout_html

dict_libraries = Dict(
    "ECharts" => "<script src='https://cdn.jsdelivr.net/npm/echarts@5.3.2/dist/echarts.js'></script>",
    "GSAP" => "<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js'></script>",
    "Leaflet" => "<link rel='stylesheet' href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=' crossorigin='' />
    <script src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js' integrity='sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=' crossorigin=''></script>"
)

function register_components()
    p_components = "public/js/components"
    components_filenames = readdir(p_components)
    components_names = String[]
    for filename in components_filenames
        if filename[1:5]!="index"
            n = filename[1:end-3]
            push!(components_names,n)
            Genie.Renderer.Html.register_normal_element(replace(n,"-" => "__"))
        end
    end
    return 
end

"""
template_filename - name of a template to use
controller - name of a controller where to look for a view file
view_filename - a view file name
css - should be a vector of names of css files
libraries - should be a vector of names of library names from `dict_libraries`
"""
function generate_layout_html(template_filename,controller,view_filename; css=nothing, libraries=nothing)

    template_filename = template_filename*".jl.html"

    function add_spacing(snippet_name,snippet,html)
        ind = findfirst(snippet_name,html)[1] - 1
        cnt = 0
        while true
            if html[ind]=='\n'
                break
            else
                ind = ind - 1
                cnt += 1
            end
        end
        snippet = replace(snippet,"\n" => string("\n",repeat(" ",cnt)))
        return snippet
    end

    function push_component_tags(tags,html,components_names)
        for n in components_names
            if occursin(n,html)
                push!(tags,n)
            end
        end
    end

    function list_files(x)
        v = String[]
        for (root, dirs, files) in walkdir(x)
            for file in files 
                file = joinpath(root, file)
                push!(v, file)
            end
        end
        return v
    end

    warning_comment = """
    <!--

    DO NOT EDIT. CREATED AUTOMATICALLY
    
    -->    

    """

    p_components = "public/js/components"
    components_filenames = readdir(p_components)
    components_names = String[]
    for filename in components_filenames
        if filename[1:5]!="index"
            n = filename[1:end-3]
            push!(components_names,n)
            Genie.Renderer.Html.register_normal_element(replace(n,"-" => "__"))
        end
    end
    #=
    
    p_snippets = "app/layouts/snippets"
    snippet_filenames = readdir(p_snippets)
    snippet_names = map(x-> string("<%@",x[1:end-8],"%>"],snippet_filenames)
    snippets = String[]
    for snippet_filename in snippet_filenames
        snippet = open(joinpath(p_snippets,snippet_filename)) do file
            read(file, String)
        end
        push!(snippets,snippet)
    end
    =#

    savepath = "app/layouts"
    p_controllers = "app/resources"
    p_templates = "app/layouts"
    p_components = "public/js/components"
    p_css = "public/css"
    p_svelte = "./app/svelte/src"


    template_filenames = readdir(p_templates)
    
    controllers_dirs = readdir(p_controllers)
    dict_views = Dict{String,String}()
    dict_template_views = Dict{String,Vector{String}}()
    #for controller in controllers_dirs
        # Get views
        p_controller = joinpath(p_controllers,controller)
        p_views = joinpath(p_controller,"views")
        #if isdir(p_views)
            # HTML code for view
            #for view_filename in readdir(p_views)
                html_view = open(joinpath(p_views,view_filename*".jl.html")) do file
                    read(file, String)
                end
                dict_views[view_filename] = html_view
            #end
        #end
        # Get views per template
        controller_vec = filter(x -> occursin("Controller",x),readdir(p_controller))
        if !isempty(controller_vec)
            controller_filename = controller_vec[1]
            controller_code = open(joinpath(p_controller,controller_filename)) do file
                read(file, String)
            end
            controller_split = split(controller_code,"\n")
            controller_filtered = filter(x -> occursin("html(",x) && !occursin("generate_layout_html",x),controller_split)
            controller_split = map(x -> split(x,",")[2:3],controller_filtered)
            controller_pairs = map(x -> map(y -> split(y,":")[end],x),controller_split)
            for pair in controller_pairs
                view = pair[1]
                template = pair[end]
                if template in keys(dict_template_views)
                    push!(dict_template_views[template],view)
                else
                    dict_template_views[template] = [view]
                end
            end
        end
    #end

    # html - HTML code for template
    html = open(joinpath(p_templates,template_filename)) do file
        read(file, String)
    end

    html_view = dict_views[view_filename]

    files_svelte = list_files(p_svelte)
    files_svelte_names =  map(x -> split(x, ['/','\\','.'])[end-1],files_svelte)
    dict_svelte_files = Dict(zip(files_svelte_names,files_svelte))

    css_tags = []
    tags = []
    push_component_tags(tags,html,components_names)
    push_component_tags(tags,html_view,components_names)
    for tag in tags
        js = open(joinpath(p_components,string(tag,".js"))) do file
            read(file, String)
        end
        temp_tags = []
        js_split = split(js,"\n")
        js_temp = string(js_split[occursin.("import",js_split)])
        push_component_tags(temp_tags,js_temp,components_names)
        map(t -> t in tags ? nothing : push!(tags,t),temp_tags)
        
        if tag in keys(dict_svelte_files)
            svelte = open(dict_svelte_files[tag]) do file
                read(file, String)
            end
            svelte_split = split(svelte,"\r\n")
            svelte_css_imports = filter(x -> occursin("@import",x),svelte_split)
            css_tags_temp = map(x -> split(x,['\'','"'])[end-1], svelte_css_imports)
            push!(css_tags,css_tags_temp...)
        end
    end
    css_tags = unique(css_tags)

    if !isnothing(css)
        map(x -> push!(css_tags,"/css/"*x*".css"),css)
    end

    #html = string(warning_comment,html)
    #=
        for (snippet_name,snippet) in zip(snippet_names,snippets)
            if (occursin(snippet_name, html))
                snippet = add_spacing(snippet_name,snippet,html)
                html = replace(html,snippet_name => snippet)
            end
        end
        
        htmls = [html,html_view]

        template_name = template_filename[1:end-8]
        p_view_snippets = joinpath(p_view,"snippets",template_name)
        if isdir(p_view_snippets)
            view_snippets_filenames = readdir(p_view_snippets)
            view_snippet_html = open(joinpath(p_view,template_filename)) do file
                read(file, String)
                end
            push!(htmls,view_snippet_html)
        end
    =#
    ind_opening = findfirst("<!--Load components-->",html)[1] - 1
    ind_closing = findfirst("</head>",html)[1] - 1
    components_to_add = "\n    <!--Load components-->"
    for component_name in tags
        components_to_add = string(components_to_add,"\n    <script type = 'module' src='/js/components/$component_name.js'></script>")
    end
    html = string(html[1:ind_opening],components_to_add,"\n",html[ind_closing+1:end])

    ind_opening = findfirst("<!--Load CSS-->",html)[1] - 1
    ind_closing = findfirst("<!--Load components-->",html)[1] - 1
    css_to_add = "\n    <!--Load CSS-->"
    for css_name in css_tags
        css_to_add = string(css_to_add,"\n    <link rel='stylesheet' href='$css_name'>")
    end
    html = string(html[1:ind_opening],css_to_add,"\n",html[ind_closing+1:end])

    tags_libraries = String["GSAP"]

    if !isnothing(libraries)
        ks = collect(keys(dict_libraries))
        ks_normalized = lowercase.(ks)
        libraries_normalized = lowercase.(libraries)
        lib = libraries_normalized[1]
        for lib in libraries_normalized
            inds = lib .== ks_normalized
            if count(inds)==1
                push!(tags_libraries,ks[inds][1])
            end
        end
    end

    ind_opening = findfirst("<!--Load libraries-->",html)[1] - 1
    ind_closing = findfirst("<!--Load fonts-->",html)[1] - 1
    libraries_to_add = "\n    <!--Load libraries-->"
    for lib in tags_libraries
        libraries_to_add = string(libraries_to_add,"\n    "*dict_libraries[lib])
    end
    html = string(html[1:ind_opening],libraries_to_add,"\n",html[ind_closing+1:end])

    #=
    path = joinpath(savepath,template_filename)
    open(path, "w") do io
        write(io, html)
    end
    =#
    return html
end

end