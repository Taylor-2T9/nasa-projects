import curiosity from "@/assets/images/curiosity.jpg"
import opportunity from "@/assets/images/opportunity.jpg"
import perseverance from "@/assets/images/perseverance.jpg"
import spirit from "@/assets/images/spirit.jpg"

const rovers = [
    {
        name: "Curiosity",
        subtitle: "Curiosity rover images",
        base_url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity",
        route: "/curiosity",
        logo: curiosity.src
    },
    {
        name: "Opportunity",
        subtitle: "Opportunity rover images",
        base_url: "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity",
        route: "/opportunity",
        logo: opportunity.src
    },
    {
        name: "Perseverance",
        subtitle: "Perseverance rover images",
        base_url: "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance",
        route: "/perseverance",
        logo: perseverance.src
    },
    {
        name: "Spirit",
        subtitle: "Spirit rover images",
        base_url: "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit",
        route: "/spirit",
        logo: spirit.src
    }
]

export default rovers
