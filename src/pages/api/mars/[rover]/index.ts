import { PictureData } from '@/types/api/apod'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PictureData>
) {
    const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${req.query.rover}?api_key=${process.env.API_KEY}`)
    const data: PictureData = resp.data
    res.status(200).json(data)
}
