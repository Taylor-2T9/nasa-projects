import styled from "styled-components"

export const Container = styled.div`
position: fixed;
top: 0;
background-color: #D2D1AD;
width: 100vw;
z-index: 2;
`
export const Nav = styled.nav`
display: flex;
width: 100vw;
flex-direction: row;
justify-content: space-around;
align-items: center;
@media screen and (max-width: 992px){
  justify-content: start;
}
`
export const TitleArea = styled.div`
`
export const Title = styled.h3`
`
export const List = styled.ul`
display: flex;
flex-direction: row;
list-style-type: none;
color: #07368f;
text-decoration: none;
@media screen and (max-width: 992px){
  justify-content: start;
  margin-left: 3px;
  padding: 5px;
}
`
export const Option = styled.li`
user-select: none;
box-sizing: border-box;
padding: 5px;
margin: 0px 18px;
@media screen and (max-width: 992px){
  padding: 0px;
  margin: 0px 10px;
}
float: left;
position: relative;
align-items: center;
height: 100%;
&:hover{
    cursor: pointer;
    font-weight: 500;
}
a{
    text-decoration: none;
    color: black;
    &:visited {
      color: #07368f;
    }
}
`