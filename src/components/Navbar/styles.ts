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
@media screen and (max-width: 700px){
  justify-content: start;
}
`
export const TitleArea = styled.div`
display: flex;
align-items: center;
svg{
  width: 30px;
  height: 30px;
  margin: 25px;
  margin-right: 10px;
}
`
export const Title = styled.h3`
`
export const List = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
list-style-type: none;
color: #07368f;
text-decoration: none;
@media screen and (max-width: 700px){
  justify-content: start;
  margin-left: 3px;
  padding: 5px;
}
`
export const Option = styled.li`
form{
  display: flex;
  flex-direction: column;
}
user-select: none;
box-sizing: border-box;
color: black;
padding: 5px;
margin: 0px 18px;
@media screen and (max-width: 700px){
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
export const DateForm = styled.form`
`
export const DateInput = styled.input`
width: 200px;
appearance: none;
outline: none;
background-color: #fff;
border: 1px solid #ccc;
border-radius: 4px;
padding: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
&:hover{
  box-shadow: 0 0 8px rgba(6, 6, 6, 0.9);
}
@media screen and (max-width: 700px){
  width: 100px;
}
`
export const ConfirmButton = styled.button`
width: 150px;
height: 40px;
background-color: #6c757d;
color: #fff;
border: none;
border-radius: 4px;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #343a40;
}
@media screen and (max-width: 700px){
  width: 75px;
}
`