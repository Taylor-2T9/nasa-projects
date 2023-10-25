import apod from "../images/apod_header.jpg"
import genelab from "../images/genelab.png"
import mars_rovers from "../images/mars_rovers.jpg"
import nasa_images from "../images/nasa_images.jpg"

const projects = [
    {
        name: "NASA APOD",
        subtitle: "Astronomic Picture of the Day",
        base_url: "https://api.nasa.gov/planetary/apod",
        route: "/apod",
        logo: apod.src
    },
    {
        name: "NASA Image and Video Library",
        subtitle: "Images from NASA Database",
        base_url: "https://images.nasa.gov/",
        route: "/images",
        logo: nasa_images.src
    },
    {
        name: "NASA Mars Rovers",
        subtitle: "Images from NASA Rovers in Mars",
        base_url: "https://api.nasa.gov/planetary/mars",
        route: "/mars",
        logo: mars_rovers.src
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
