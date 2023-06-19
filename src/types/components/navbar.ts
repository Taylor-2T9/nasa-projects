import { Dispatch, SetStateAction } from "react";
import { PictureData } from "../api/apod";

export interface NavProps {
    setPicture?: Dispatch<SetStateAction<PictureData>>
}