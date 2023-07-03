import styled from "styled-components"

export const Container = styled.div`
background-color: rgb(6, 6, 6, 0.8);
display: flex;
flex-wrap: wrap;
padding-top: 10px;
@media (max-width: 1116px) {
    padding-top: 50px;
}
@media (max-width: 900px) {
    flex-wrap: nowrap;
    flex-direction: column;
    padding-top: 120px;
}
height: 98.5vh;
`
export const InfoArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
color: white;
text-align: center;
max-width: 45%;
margin-top: 10%;
margin-left: 5%;
margin-bottom: 5%;
@media (max-width: 900px) {
    margin-bottom: 0;
    margin-top: 7%;
}
@media (max-width: 900px) {
    max-width: 100%;
    margin-left: 0;
    p{
        max-width: 100%;
        margin-left: 0%;
    }
}
`
export const Description = styled.p`
font-size: 18px;
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
margin-top: 8.5%;
display: flex;
color: white;
justify-content: center;
align-items: center;
width: 50%;
max-height: 80vh;
image-rendering: optimizeQuality;
@media (max-width: 1115px) {
    margin-top: 7%;
}
@media (max-width: 900px) {
    margin-top: 0;
}
img{
    align-self: center;
    width: 90%;
    @media (max-width: 900px) {
        height: 300px;
        width: 300px;
    }
    @media (max-width: 780px) {
        height: 300px;
        width: 250px;
    }
    border-radius: 5%;
}
`