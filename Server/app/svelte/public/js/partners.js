export let partners = [
    {
        name: "Gaia's Fall",
        type: "typeGaiasFall",
        location: [["Online",""],[0,0]],
        link: "https://discord.libsoc.org/invite/",
        description: "descriptionGaiasFall",
        logo: "gaias_fall"
    }
]

export let partnersByCountry = {}
for (let g of partners) {
    let country = g.location[0][0]
    if (country in partnersByCountry) {
        partnersByCountry[country].push(g)
    }
    else {
        partnersByCountry[country] = [g]
    }
}