import { ILinkProps } from "@/types/pages/mars/rovers"
import _Image from "next/image"
import mars_header from "@/assets/images/mars_headers.jpg"
import styled from "styled-components"
import _Link from "next/link"

export const RoverHeader = styled.div`
background-image: url(${mars_header.src});
background-size: cover;
background-position-y: 30%;
width: 100%;
height: 250px;
position: relative;
`
export const RoverHeaderContent = styled.div`
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
    padding-top: 2%;
    @media (max-width: 950px) {
        padding-top: 6%;
    }
    position: relative;
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
padding-top: 3%;
@media (max-width: 450px) {
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
export const Container = styled.div`
width: 100%;
min-height: 80vh;
padding-top: 2%;
background-color: #020202d9;
color: whitesmoke;
@media (max-width: 1116px) {
    padding-top: 50px;
}
@media (max-width: 900px) {
    flex-wrap: nowrap;
    flex-direction: column;
    padding-top: 100px;
}
`
export const List = styled.div`
display: flex;
flex-wrap: wrap;
padding: 2%;
justify-content: center;
`
export const Item = styled.div`
cursor: pointer;
margin: 2%;
color: black;
width: 450px;
height: 370px;
@media (max-width: 600px) {
    width: 300px;
    height: 285px;
}
text-align: center;
//padding: 3%;
padding-bottom: 3%;
border-radius: 10px;
background-color: #e1e1e1;
box-shadow: 3px 2px 22px 3px rgba(43,43,43,1);
transition: transform 0.2s, box-shadow 0.2s;
&:hover{
    background-color: #eaeaea;
    transform: translateY(-5px);
    h5{
        text-decoration: underline;
    }
}
img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 280px;
    width: 450px;
    @media (max-width: 600px) {
        width: 300px;
        height: 180px;
    }
    user-select: none;
}
h3 {
    margin: 0;
    margin-top: 7px;
}
`
export const ItemInfo = styled.div`
`
export const ImageLink = styled(_Link)`
display: none;
`