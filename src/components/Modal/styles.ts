import styled from 'styled-components'

export const Fade = styled.div`
  position: fixed;
  color: whitesmoke;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`

export const Modal = styled.div`
  background: #0a0808;
  padding: 20px;
  border-radius: 5px;
  max-width: 50%;
  text-align: center;
  box-shadow: -1px -1px 19px 0px rgba(240,240,240,0.1);
  @media (min-height: 600px) and (max-width: 500px){
  width: 80vw;
  height: 50vh;
  }
`
export const Content = styled.div`
@media (min-height: 600px) and (max-width: 500px){
  width: 100%;
  height: 90%;
  overflow-y: scroll;
}
`
export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 10%;
`
export const CloseButton = styled.button`
  cursor: pointer;
  background: none;
  color: whitesmoke;
  font-size: 13px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid gray;
  &:hover{
    background: #272727;
  }
`