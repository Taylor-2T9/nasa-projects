import { convertObjectToArray } from '@/utils/object'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { page, terms } = req.query

    if (terms) {
        const searchResults = await axios.get(
            `https://images-api.nasa.gov/search?q=${terms}&page=${page}&media_type=image&year_start=1920&year_end=2023`
        )
        return res.status(200).json(searchResults.data.collection)
    }

    const popular = await axios.get(`https://images-assets.nasa.gov/popular.json`)
    return res.status(200).json(popular.data.collection)
}
