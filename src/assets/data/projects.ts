import apod from "../apod.jpg"
import earth from "../earth.png"
import exoplanets from "../exoplanets.jpg"
import genelab from "../genelab.png"
import mars_rovers from "../mars_rovers.jpg"

const projects = [
    {
        name: "NASA APOD",
        subtitle: "Astronomic Picture of the Day",
        base_url: "https://api.nasa.gov/planetary/apod",
        logo: apod.src
    },
    {
        name: "NASA Earth",
        subtitle: "Landsat Images from Earth",
        base_url: "https://api.nasa.gov/planetary/apod",
        logo: earth.src
    },
    {
        name: "NASA Exoplanet",
        subtitle: "Access to Exoplanet Archive",
        base_url: "https://api.nasa.gov/planetary/apod",
        logo: exoplanets.src
    },
    {
        name: "NASA GeneLab",
        subtitle: "Access to GeneLab database",
        base_url: "https://api.nasa.gov/planetary/apod",
        logo: genelab.src
    },
    {
        name: "NASA Mars Rovers",
        subtitle: "Images from NASA Rovers in Mars",
        base_url: "https://api.nasa.gov/planetary/apod",
        logo: mars_rovers.src
    }
]

export default projects
