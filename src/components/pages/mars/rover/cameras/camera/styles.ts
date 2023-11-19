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
export const SolForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5px;
@media (min-height: 700px) and (max-width: 500px){
  margin-top: -20px;
}
span{
    font-size: 12px;
    margin: 10px;
    margin-bottom: 2px;
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
min-width: 187px;
text-align: center;
height: 22px;
appearance: none;
outline: none;
background-color: #fff;
border: 1px solid #ccc;
border-radius: 4px;
padding: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
margin-top: 8px;
font-size: 12px;
@media (min-height: 600px) and (max-width: 500px){
  min-width: 125px;
}
&:hover{
  box-shadow: 0 0 8px rgba(6, 6, 6, 0.9);
}
`
export const SolConfirm = styled.button`
width: 6vw;
min-width: 88px;
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
export const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
@media (min-height: 600px) and (max-width: 500px){
  margin-top: 11px;
}
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