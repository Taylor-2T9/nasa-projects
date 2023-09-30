import apod from "../images/apod_header.jpg"
import earth from "../images/earth.png"
import exoplanets from "../images/exoplanets.jpg"
import genelab from "../images/genelab.png"
import mars_rovers from "../images/mars_rovers.jpg"

const projects = [
    {
        name: "NASA APOD",
        subtitle: "Astronomic Picture of the Day",
        base_url: "https://api.nasa.gov/planetary/apod",
        route: "/apod",
        logo: apod.src
    },
    {
        name: "NASA Mars Rovers",
        subtitle: "Images from NASA Rovers in Mars",
        base_url: "https://api.nasa.gov/planetary/mars",
        route: "/mars",
        logo: mars_rovers.src
    },
    {
        name: "NASA Earth",
        subtitle: "Landsat Images from Earth",
        route: "/earth",
        base_url: "https://api.nasa.gov/planetary/earth",
        logo: earth.src
    },
    {
        name: "NASA Exoplanet",
        subtitle: "Access to Exoplanet Archive",
        route: "/exoplanets",
        base_url: "https://api.nasa.gov/planetary/exoplanets",
        logo: exoplanets.src
    },
    {
        name: "NASA GeneLab",
        subtitle: "Access to GeneLab database",
        route: "/genelab",
        base_url: "https://api.nasa.gov/planetary/genelab",
        logo: genelab.src
    }
]

export default projects
