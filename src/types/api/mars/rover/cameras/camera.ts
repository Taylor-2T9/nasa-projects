import { NextApiRequest, NextApiResponse } from "next"
import { IRoverData } from ".."

export interface IRoverCameraSample {
    camera_name: string,
    camera_full_name: string,
    src: string,
    earth_date: string,
    rover_name: IRoverData['name'],
    sol?: number
}

export interface IRoverCameraRequest extends NextApiRequest {
    query: {
        rover: 'curiosity' | 'opportunity' | 'perseverance' | 'spirit'
        camera: string
    }
}

export interface IRoverCameraResponse extends NextApiResponse {
    data: IRoverCameraSample[]
}
