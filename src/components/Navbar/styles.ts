import styled from "styled-components"
import { INavContainerProps } from "@/types/components/navbar"
import { ILinkProps } from "@/types/pages/mars/rovers"
import _Image from "next/image"
import _Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"


export const Container = styled.div<INavContainerProps>`
background-image: ${props => `url(${props.background_image.src})`};
background-size: cover;
background-position-y: 30%;
width: 100%;
height: 33vh;
@media (min-height: 642px) and (max-width: 500px){
    height: 32vh;
}
@media (min-height: 680px) and (max-width: 500px){
    height: 29vh;
}
@media (min-height: 850px) and (max-width: 500px){
    height: 26vh;
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
margin-top: 0.5%;
@media (max-width: 950px) {
  margin-top: 2%;
}
@media (min-height: 600px) and (max-width: 500px){
  margin-top: 5%;
}
@media (min-height: 750px) and (max-width: 500px) {
  margin-top: 5%;
}
a{
    cursor: pointer;
    position: relative;
    margin: 0;
    &:hover{
        top: 5px;
        color: #717171;
    }
}
`
export const Link = styled(_Link) <ILinkProps>`
text-decoration: none;
padding: 0 1%;
color: ${props => props.active === 'true' ? '#717171' : 'whitesmoke'};
top: ${props => props.active === 'true' ? '5px' : '0'};
`
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  a{
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover{
      background-color: #ddd;
    }
  }
`
export const SolForm = styled.form`
display: flex;
flex-direction: column;
margin-top: -15px;
@media (min-height: 600px) and (max-width: 500px){
  margin-top: -10px;
}
label{
  font-size: 13px;
@media (min-height: 600px) and (max-width: 500px){
  font-size: 11px;
}
}
`
export const SolInput = styled.input`
width: 7.3vw;
min-width: 104px;
text-align: center;
height: 10px;
appearance: none;
outline: none;
background-color: #fff;
border: 1px solid #ccc;
border-radius: 4px;
padding: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
margin-top: 8px;
margin-left: 3px;
font-size: 12px;
@media (min-height: 600px) and (max-width: 500px){
  min-width: 78px;
}
&:hover{
  box-shadow: 0 0 8px rgba(6, 6, 6, 0.9);
}
`
export const SolConfirm = styled.button`
width: 6vw;
min-width: 55px;
height: 28px;
background-color: #6c757d;
color: #fff;
border: none;
border-radius: 4px;
margin-left: auto;
margin-right: auto;
margin-top: 7px;
font-size: 13px;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #343a40;
}
`
export const Dropdown = styled.div`
  &:hover > ${DropdownContent} {
    display: block;
  }
`
export const MenuIcon = styled(AiOutlineMenu)`
`
export const Title = styled.h1<{ variant: 'top' | 'center' }>`
text-align: center;
margin: 0;
padding-top: 1.7%;
text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
@media (min-height: 600px) and (max-width: 500px) {
  padding-top: ${props => props.variant === 'top' ? '6%' : '12%'};
  font-size: 28px;
}
padding-left: 2.3%;
color: whitesmoke;
`
export const Home = styled.div`
display: flex;
align-items: center;
height: 30px;
margin-top: 27px;
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
margin-top: -1.8%;

@media (max-width: 770px){
  margin-top: 1%;
}
`
export const DateInput = styled.input`
width: 15vw;
min-width: 100px;
outline: none;
border: 1px solid #ccc;
border-radius: 4px;
padding: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
@media (min-height: 600px) and (max-width: 500px){
  margin-top: 5px;
  height: 9px;
}
&:hover{
  box-shadow: 0 0 8px rgba(6, 6, 6, 0.9);
}
`
export const ConfirmButton = styled.button`
width: 12vw;
min-width: 100px;
height: 40px;
@media (min-height: 600px) and (max-width: 500px){
  height: 30px;
}
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