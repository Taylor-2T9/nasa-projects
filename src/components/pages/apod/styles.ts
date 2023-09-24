import styled from "styled-components"

export const Container = styled.div`
background-color: #020202d9;
display: flex;
flex-wrap: wrap;
padding-top: 20vh;
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
margin-top: 10%;
margin-left: 5%;
margin-bottom: 5%;
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