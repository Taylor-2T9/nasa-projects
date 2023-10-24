import styled from "styled-components"

export const Container = styled.div`
background-color: #020202d9;
display: flex;
flex-wrap: wrap;
min-height: 80vh;
padding-top: 20vh;  
@media (min-width: 1175px){
    padding-top: 22vh;  
    min-height: 0;
    height: 78vh;
    overflow-y: hidden;
}
@media (max-width: 1120px){
    padding-top: 22vh;
}
@media (max-width: 1000px){
    padding-top: 24vh;
}
@media (max-width: 900px){
    padding-top: 26vh;
}
@media (max-width: 750px){
    padding-top: 30vh;
}
`
export const InfoArea = styled.div`
display: flex;
color: white;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
max-width: 45%;
margin-left: 5%;
margin-top: 2%;
h2 {
    white-space: normal;
    max-width: 98%;
    text-align: center;
}
@media (max-width: 1150px) {
    margin-top: 7%;
}
@media (max-width: 1025px) {
    margin-top: 5%;
}
@media (max-width: 900px) {
    margin: 0;
    margin-top: 5%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    p{
        max-width: 100%;
        margin-left: 0%;
    }
}
`
export const Description = styled.p`
font-size: 18px;
margin-top: 0;
margin-bottom: 0;
@media (max-width: 900px){
    display: none;
}
`
export const DescriptionButton = styled.button`
cursor: pointer;
background: #cfcfcf;
margin: 2%;
padding: 5px 10px;
font-weight: 600;
border-radius: 5px;
border: 1px solid #bfbfbf;
&:hover{
    background: #e2e0e0;
}
@media (max-width: 900px){
    display: none;
}
`
export const LocalDate = styled.p`
margin-top: 0;
`
export const MobileDescription = styled.p`
display: none;
color: white;
width: 90%;
margin-left: auto;
margin-right: auto;
text-align: center;
@media (max-width: 900px){
    display: block;
}
`
export const MobileDescriptionButton = styled.button`
cursor: pointer;
background: #cfcfcf;
font-weight: 600;
width: 25%;
padding: 5px 10px;
margin-left: auto;
margin-right: auto;
margin-bottom: 30px;
border-radius: 5px;
border: 1px solid #bfbfbf;
&:hover{
    background: #e2e0e0;
}
@media (min-width: 900px){
    display: none;
}
`
export const PictureArea = styled.div`
margin-left: auto;
margin-right: auto;
display: flex;
color: white;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
image-rendering: optimizeQuality;
@media (min-width: 1100px) {
    margin-top: 5vh;
}
img, embed{
    border-radius: 8px;
    align-self: center;

    &:hover{
        transition: .32s ease;
        border: 1px solid #4d4d4d;
    }

    @media (min-width: 1175px) {
        width: 90%;
        height: 80%;
    }
    @media (max-width: 1174px) {
        margin-top: 9.2%;
    }
    @media (max-width: 1100px) {
        margin-top: 15%;
    }
    @media (max-width: 900px) {
        margin-top: 14%;
        height: 285px;
        width: 285px;
    }
    @media (max-width: 780px) {
        margin-top: 5%;
        height: 285px;
        width: 245px;
    }
}

`