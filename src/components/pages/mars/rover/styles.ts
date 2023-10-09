import { ILinkProps } from "@/types/pages/mars/rovers"
import _Image from "next/image"
import styled from "styled-components"
import _Link from "next/link"

export const Container = styled.div`
padding-top: 20vh;
width: 100%;
min-height: 80vh;
background-color: #020202d9;
color: whitesmoke;
@media (min-height: 700px) {
    padding-top: 30vh;
}
`
export const RoverArea = styled.div`
display: flex;
height: 100%;
@media (max-height: 700px){
    margin-top: 22vh;
}
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: flex-start;
`
export const InfoArea = styled.div`
width: 50%;
display: flex;
flex-direction: column;
margin: 25px;
`
export const ImageArea = styled.div`
width: 260px;
height: 260px;
border-radius: 3px;
border: 2px solid whitesmoke;
`
export const Image = styled(_Image)`
width: 100%;
height: 100%;
`