import { ILinkProps } from "@/types/pages/mars/rovers"
import _Image from "next/image"
import styled from "styled-components"
import _Link from "next/link"

export const Container = styled.div`
width: 100%;
min-height: 80vh;
padding-top: 34vh;
background-color: #020202d9;
color: whitesmoke;
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
padding-bottom: 3%;
border-radius: 10px;
background-color: #d1d1d1;
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