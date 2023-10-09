import { Dispatch, SetStateAction } from "react"
import { IPictureData } from "../api/apod"
import { StaticImageData } from "next/image"
import { IRoverCameraSample } from "../api/mars/rover/cameras/camera"

export interface INavProps {
    setPicture?: Dispatch<SetStateAction<IPictureData>>
    setCamImages?: Dispatch<SetStateAction<IRoverCameraSample[]>>
    title?: string
    rover_max_sol?: number | string
}
export interface INavContainerProps {
    background_image: StaticImageData
}