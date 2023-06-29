import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
padding-top: 8%;
align-items: center;
justify-content: center;
@media (max-width: 1116px) {
    padding-top: 50px;
}
@media (max-width: 900px) {
    flex-wrap: nowrap;
    flex-direction: column;
    padding-top: 120px;
}
`