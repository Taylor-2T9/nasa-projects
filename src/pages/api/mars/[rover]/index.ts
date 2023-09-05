import { IRoverData } from '@/types/api/mars/rover'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IRoverData>
) {
    const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${req.query.rover}?api_key=${process.env.API_KEY}`)
    const data: IRoverData = resp.data
    return res.status(200).json(data)
}
