import { convertObjectToArray } from '@/utils/object'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const resp = await axios.get(`https://osdr.nasa.gov/genelab/data/glds/files/${req.query.page}?api_key=${process.env.API_KEY}`)
    const data = convertObjectToArray(resp.data.studies)

    res.status(200).json(data)
}
