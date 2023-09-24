import { Dispatch, SetStateAction } from "react";
import { IPictureData } from "../api/apod";
import { StaticImageData } from "next/image";

export interface INavProps {
    setPicture?: Dispatch<SetStateAction<IPictureData>>
    title?: string
}
export interface INavContainerProps {
    background_image: StaticImageData
}