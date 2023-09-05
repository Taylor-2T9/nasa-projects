import { Dispatch, SetStateAction } from "react";
import { IPictureData } from "../api/apod";

export interface INavProps {
    setPicture?: Dispatch<SetStateAction<IPictureData>>
}