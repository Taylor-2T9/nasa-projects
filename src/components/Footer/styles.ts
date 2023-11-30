import styled from "styled-components"
import { FaUserAstronaut } from 'react-icons/fa'
export const Container = styled.footer`
background-color: #0b1429;
display:flex;
justify-content: space-around;
align-items: center;
height: 82px;
width: 100%;
`
export const Title = styled.h3`
color: whitesmoke;
a{
    color: whitesmoke;    
}
`
export const UserAstronaut = styled(FaUserAstronaut)`
user-select: none;
font-size: 43px;
color: whitesmoke;
background-color: #542282;
border-radius: 50px;
animation-name: example;
animation-duration: 4.2s;
@keyframes example {
  0%   { background-color: #0ff522; color: whitesmoke; }
  25%  { background-color: #14b0c4; color: #0d0d0d; }
  50%  { background-color: #141dc4; color: whitesmoke; }
  75%  { background-color: blueviolet; color: #0d0d0d; }
  100% { background-color: #542282; color: whitesmoke; }
}
:hover{

}
`
export const NasaLogo = styled.img`
user-select: none;
`