import styled from "styled-components"

export const Video = styled.embed`
cursor: pointer;
align-self: center;
width: 90%;
@media (max-width: 900px) {
    height: 300px;
    width: 250px;
}
border-radius: 5%;
`
export const Redirect = styled.a`
display: none;
`