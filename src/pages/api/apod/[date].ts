import { PictureData } from '@/types/api/apod'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PictureData>
) {
    const resp = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${req.query.date}`)
    const data: PictureData = resp.data
    res.status(200).json(data)
}
