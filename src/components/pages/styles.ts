import styled from "styled-components"

export const Container = styled.div`
background-color: #020202d9;
`
export const Explorer = styled.main`
display: flex;
flex-wrap: wrap;
margin-left: auto;
margin-right: auto;
@media (max-height: 700px){
    padding-top: 40vh;
}
@media (min-height: 900px) {
    padding-top: 30vh;
}
align-items: center;
justify-content: center;
`