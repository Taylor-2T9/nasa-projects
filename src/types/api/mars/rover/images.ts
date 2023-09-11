import { NextApiRequest, NextApiResponse } from "next"
import { IRoverData } from "."

interface IRoverCameraSample {
    camera_name: string,
    camera_full_name: string,
    src: string,
    earth_date: string,
    rover_name: IRoverData['name']
}

export interface IRoverCamerasRequest extends NextApiRequest {
    query: {
        rover: 'curiosity' | 'opportunity' | 'perseverance' | 'spirit'
        cams: string
    }
}

export interface IRoverCamerasResponse extends NextApiResponse {
    data: IRoverCameraSample[]
}
