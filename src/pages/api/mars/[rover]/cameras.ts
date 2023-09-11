import cameraTypes from '@/assets/data/rovers/camera_types'
import { IRoverCamerasRequest, IRoverCamerasResponse } from '@/types/api/mars/rover/images'
import axios from 'axios'

export default async function handler(
    req: IRoverCamerasRequest,
    res: IRoverCamerasResponse
) {
    const cameras = req.query.cams.split(',')

    await Promise.all(
        cameras.map(camera => {
            const camera_sol = cameraTypes[camera].default_sol[req.query.rover]
            if (camera_sol)
                return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${req.query.rover}/photos?api_key=${process.env.API_KEY}&camera=${camera}&sol=${camera_sol}&page=1`)
            return { data: { photos: [] } }
        }
        ))
        .then(values => {
            const samples = values.map(({ data }) => {
                const photo = data.photos[0]
                return {
                    name: photo?.camera.name,
                    full_name: photo?.camera.full_name,
                    src: photo?.img_src,
                    earth_date: photo?.earth_date,
                    rover_name: photo?.rover.name
                } || {}
            })
            return res.status(200).json(samples)
        })
}
