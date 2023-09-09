import { IRoverCamerasRequest, IRoverCamerasResponse } from '@/types/api/mars/rover/images'
import axios from 'axios'

export default async function handler(
    req: IRoverCamerasRequest,
    res: IRoverCamerasResponse
) {
    const cameras = req.query.cams.split(',')
    console.log(cameras)
    // Separar os ângulos padrão para cada tipo de câmera antes de fazer a requisição
    const cameras_samples = await Promise.all(
        cameras.map(camera => {
            let sol = 0
            switch (camera.toLowerCase()) {
                case 'fhaz':
                    sol = 2800
                    break;
                case 'rhaz':
                    sol = 1800
                    break;
                case 'minites':
                    sol = 3250
                    break;
                case 'navcam':
                case 'pancam':
                    sol = 2000
                    break;
                case 'entry':
                    sol = 2000
                    break;
                default:
                    sol = 1000
                    break;
            }
            console.log(sol)
            return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${req.query.rover}/photos?api_key=${process.env.API_KEY}&camera=${camera}&sol=${sol}&page=1`)
        }
        ))
        .then(values => {
            const samples = values.map(({ data }) => {
                const photo = data.photos[0]
                return {
                    camera_name: photo?.camera.name,
                    camera_full_name: photo?.camera.full_name,
                    src: photo?.img_src,
                    earth_date: photo?.earth_date,
                    rover_name: photo?.rover.name
                } || {}
            })
            return res.status(200).json(samples)
        })
}
