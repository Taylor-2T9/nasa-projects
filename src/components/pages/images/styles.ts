import styled from "styled-components"

export const Container = styled.div`
background-color: #020202d9;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
min-height: 80vh;
padding-top: 36vh;
@media (max-width: 1120px){
    padding-top: 36vh;
}
@media (max-width: 1000px){
    padding-top: 38vh;
}
@media (max-width: 900px){
    padding-top: 37vh;
}
@media (max-width: 750px){
    padding-top: 34vh;
}
`
export const SearchArea = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5px;
@media (min-height: 700px) and (max-width: 500px){
  margin-top: -20px;
}
span{
    font-size: 12px;
    margin: 10px;
    margin-bottom: 2px;
}
label{
  font-size: 13px;
@media (min-height: 600px) and (max-width: 500px){
  font-size: 11px;
}
}
`
export const Input = styled.input`
width: 7.3vw;
min-width: 187px;
text-align: center;
height: 22px;
appearance: none;
outline: none;
background-color: #fff;
border: 1px solid #ccc;
border-radius: 4px;
padding: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
margin-top: 8px;
font-size: 12px;
@media (min-height: 600px) and (max-width: 500px){
  min-width: 125px;
}
&:hover{
  box-shadow: 0 0 8px rgba(6, 6, 6, 0.9);
}
`
export const ConfirmButton = styled.button`
width: 7vw;
min-width: 95px;
height: 35px;
background-color: #6c757d;
color: #fff;
border: none;
border-radius: 4px;
margin-left: auto;
margin-right: auto;
margin-top: 11px;
font-size: 13px;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #343a40;
}
`
export const List = styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
padding: 5%;
padding-top: 1.2%;
@media (min-width: 900px){
    padding-top: 0%;
}
`
export const Card = styled.div`
cursor: pointer;
color: black;
margin: 3%;
width: 320px;
height: 230px;
margin-left: auto;
margin-right: auto;
text-align: center;
background-color: #d1d1d1;
box-shadow: 0px 4px 12px 0px #868687;
transition: transform 0.3s, box-shadow 0.2s;
&:hover{
    background-color: black;
    transform: translateY(-5px);
    img{
        opacity: 0.4;
    }
}
img {
    width: 100%;
    height: 100%;
    &:after{
        content: '30';
        width: 30px;
        height: 30px;
    }
}
@media (min-height: 600px) and (max-width: 500px) {
    width: 60vw;
    height: 35vh;
}
`
export const Preview = styled.div<{ show: boolean }>`
display: ${(props) => (props.show ? 'block' : 'none')};
color: whitesmoke;
position: relative;
top: -101%;
padding: 10px;
h3{
    font-weight: 500;
}
height: 90%;
background-color: rgba(0, 0, 0, 0.65);
`