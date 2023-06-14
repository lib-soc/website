export GENIE_ENV=prod
julia --color=yes --depwarn=no --project=@. -q -i -- "..\startup.jl" -s=true %*