import styled from "styled-components"
import { INavContainerProps } from "@/types/components/navbar"
import { ILinkProps } from "@/types/pages/mars/rovers"
import _Image from "next/image"
import _Link from "next/link"


export const Container = styled.div<INavContainerProps>`
background-image: ${props => `url(${props.background_image.src})`};
background-size: cover;
background-position-y: 30%;
width: 100%;
height: 35vh;
@media (min-height: 750px){
    height: 30vh;
}
position: fixed;
z-index: 3;
`
export const HeaderContent = styled.div`
display: flex;
flex-direction: column;
text-align: center;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
border-radius: 5px;
color: white;
`
export const Options = styled.div`
display: flex;
justify-content: space-around;
a{
    position: relative;
    padding-top: 2%;
    @media (max-width: 950px) {
        padding-top: 4%;
    }
    margin: 0;
    cursor: pointer;
    &:hover{
        top: 5px;
        color: #717171;
    }
}
`
export const Link = styled(_Link) <ILinkProps>`
text-decoration: none;
color: ${props => props.active === 'true' ? '#717171' : 'whitesmoke'};
top: ${props => props.active === 'true' ? '5px' : '0'};
`
export const Title = styled.h1`
text-align: center;
margin: 0;
padding-top: 1.7%;
text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
@media (min-height: 750px) {
    padding-top: 13%;
}
padding-left: 2.3%;
color: whitesmoke;
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
export const HomeRedirect = styled(_Link)`
display: none;
`
export const DateForm = styled.form`
display: flex;
flex-direction: column;
max-width: 250px;
margin-left: auto;
margin-right: 7%;
margin-top: -1%;

@media (max-width: 770px){
  margin-top: 1%;
}
@media (min-height: 750px){
  margin-top: 4.1%;
}
`
export const DateInput = styled.input`
width: 16vw;
min-width: 100px;
appearance: none;
outline: none;
background-color: #fff;
border: 1px solid #ccc;
border-radius: 4px;
padding: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
&:hover{
  box-shadow: 0 0 8px rgba(6, 6, 6, 0.9);
}
`
export const ConfirmButton = styled.button`
width: 13vw;
min-width: 100px;
height: 40px;
background-color: #6c757d;
color: #fff;
border: none;
border-radius: 4px;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #343a40;
}
`