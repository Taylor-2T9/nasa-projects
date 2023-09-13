import { NextApiRequest, NextApiResponse } from "next"
import { IRoverData } from ".."
import { IRoverCameraSample } from "./camera"



export interface IRoverCamerasRequest extends NextApiRequest {
    query: {
        rover: 'curiosity' | 'opportunity' | 'perseverance' | 'spirit'
        cams: string
    }
}

export interface IRoverCamerasResponse extends NextApiResponse {
    data: IRoverCameraSample[]
}
