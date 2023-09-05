import { IRoverHeaderProps } from "@/types/pages/mars/rovers"
import _Image from "next/image"
import mars_header from "@/assets/images/mars_headers.jpg"
import styled from "styled-components"
import Link from "next/link"

export const RoverHeader = styled.div`
background-image: url(${mars_header.src});
background-size: cover;
background-position-y: 30%;
width: 100%;
height: 250px;
position: relative;
`
export const TitleArea = styled.div`
display: flex;
flex-direction: column;
text-align: center;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
border-radius: 5px;
color: white;
`
export const Home = styled.div`
display: flex;
align-items: center;
height: 30px;
margin-top: 35px;
&:hover{
    cursor: pointer;
    font-weight: 500;
}
svg{
  width: 30px;
  height: 30px;
  margin: 25px;
  margin-right: 10px;
}
`
export const HomeRedirect = styled(Link)`
display: none;
`
export const Title = styled.h1`
text-align: center;
margin: 0;
padding-top: 5%;
padding-left: 2.3%;
color: whitesmoke;
`
export const Container = styled.div`
width: 100%;
height: 80vh;
padding-top: 2%;
background-color: #020202d9;
color: whitesmoke;
@media (max-width: 1116px) {
    padding-top: 50px;
}
@media (max-width: 900px) {
    flex-wrap: nowrap;
    flex-direction: column;
    padding-top: 120px;
}
`
export const RoverArea = styled.div`
display: flex;
height: 100%;
flex-direction: row;
justify-content: center;
align-items: top;
`
export const InfoArea = styled.div`
width: 50%;
display: flex;
flex-direction: column;
`
export const ImageArea = styled.div`
width: 20vw;
height: 40vh;
border-radius: 3px;
border: 2px solid whitesmoke;
`
export const Image = styled(_Image)`
width: 100%;
height: 100%;
`