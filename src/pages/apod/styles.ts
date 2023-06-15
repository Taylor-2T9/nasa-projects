import styled from "styled-components"

export const Container = styled.div`
background-color: rgb(6, 6, 6);
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding-top: 7%;
height: 84.5vh;
@media (max-width: 900px) {
    padding-top: 90px;
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
margin-bottom: 5%;
p{
    max-width: 87%;
    margin-left: 5%;
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
export const PictureArea = styled.div`
display: flex;
color: white;
justify-content: center;
width: 50%;
image-rendering: optimizeQuality;
img{
    width: 76.2%;
    border-radius: 5%;
}
`