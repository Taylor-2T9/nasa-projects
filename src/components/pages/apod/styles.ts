import styled from "styled-components"

export const Container = styled.div`
background-color: #020202d9;
display: flex;
flex-wrap: wrap;
padding-top: 20vh;  
min-height: 80vh;
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
flex-direction: column;
justify-content: center;
color: white;
text-align: center;
max-width: 45%;
margin-left: 5%;
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
export const LocalDate = styled.p`
    margin-top: 0;
`
export const Description = styled.p`
font-size: 18px;
margin-top: 0;
@media (max-width: 900px){
    display: none;
}
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
export const PictureArea = styled.div`
margin-left: auto;
margin-right: auto;
display: flex;
color: white;
justify-content: center;
align-items: center;
width: 50%;
image-rendering: optimizeQuality;
@media (max-width: 1150px) {
    margin-top: 2%;
}
img{
    align-self: center;
    width: 80%;
    height: 70%;
    @media (min-width: 1100px) {
        width: 75%;
        height: 63%;
    }
    @media (max-width: 1100px) {
        width: 65%;
        height: 50%;
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
    border-radius: 5%;
}

`