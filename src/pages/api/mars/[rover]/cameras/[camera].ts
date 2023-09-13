import cameraTypes from '@/assets/data/rovers/camera_types'
import { IRoverCameraRequest, IRoverCameraResponse } from '@/types/api/mars/rover/cameras/camera'
import axios from 'axios'

export default async function handler(
    req: IRoverCameraRequest,
    res: IRoverCameraResponse
) {
    const camera = req.query.camera
    const camera_sol = cameraTypes[camera].default_sol[req.query.rover]
    await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${req.query.rover}/photos?api_key=${process.env.API_KEY}&camera=${camera}&sol=${camera_sol}&page=1`)
        .then(value => {
            const samples = value.data.photos.map((photo: any) => {
                return {
                    name: photo?.camera.name,
                    camera_full_name: photo?.camera.full_name,
                    src: photo?.img_src,
                    earth_date: photo?.earth_date,
                    sol: photo?.sol,
                    rover_name: photo?.rover.name
                } || {}
            })
            return res.status(200).json(samples)
        })
    return res.status(200).end()
}
