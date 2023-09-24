import Link from "next/link"
import styled from "styled-components"

interface CardProps {
    type: "project" | "rover"
}
export const CardArea = styled.div<CardProps>`
cursor: pointer;
margin: 3%;
color: black;
width: 300px;
height: 300px;
text-align: center;
padding-bottom: 1.5%;
border-radius: 10px;
background-color: #d1d1d1;
box-shadow: 0px 4px 12px 0px #868687;
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
    height: 70%;
    width: 100%;
    max-height: 220px;
    user-select: none;
}
h3 {
    margin: 0;
    text-align: center;
}
@media (min-height: 770px) {
    width: 60vw;
    height: 35vh;
}
`
export const CardInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 4%;
`
export const CardRedirect = styled(Link)`
display: none;
`