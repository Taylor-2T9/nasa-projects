import curiosity_logo from "@/assets/images/curiosity.jpg"
import opportunity_logo from "@/assets/images/opportunity.jpg"
import perseverance_logo from "@/assets/images/perseverance.jpg"
import spirit_logo from "@/assets/images/spirit.jpg"

const rovers_list = [
    {
        name: "Curiosity",
        subtitle: "Curiosity rover images",
        base_url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity",
        route: "curiosity",
        logo: curiosity_logo.src
    },
    {
        name: "Opportunity",
        subtitle: "Opportunity rover images",
        base_url: "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity",
        route: "opportunity",
        logo: opportunity_logo.src
    },
    {
        name: "Perseverance",
        subtitle: "Perseverance rover images",
        base_url: "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance",
        route: "perseverance",
        logo: perseverance_logo.src
    },
    {
        name: "Spirit",
        subtitle: "Spirit rover images",
        base_url: "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit",
        route: "spirit",
        logo: spirit_logo.src
    }
]

export default rovers_list
