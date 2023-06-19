import styled from "styled-components"

export const CardArea = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
background-color: whitesmoke;
align-items: center;
width: 25vw;
margin: 10px;
height: 47vh;
@media (max-width: 999px) {
    width: 40vw;
    height: 50vh;
}
@media (max-width: 800px) {
    width: 60vw;
    height: 35vh;
}
img{
    user-select: none;
    max-height: 170px;
}
h3{
    margin-bottom: 0;
}
box-shadow: 0px 4px 12px 0px #868687;
`