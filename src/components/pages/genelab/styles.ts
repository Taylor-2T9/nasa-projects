import styled from 'styled-components'

export const Container = styled.div`
background-color: #020202d9;
display: flex;
flex-wrap: wrap;
height: 80vh;
width: 100vw;
padding-top: 20vh;
@media (min-width: 1175px){
    padding-top: 22vh;  
    min-height: 0;
    height: 78vh;
    overflow-y: hidden;
}
@media (max-width: 1120px){
    padding-top: 22vh;
}
@media (max-width: 1000px){
    padding-top: 24vh;
}
@media (max-width: 900px){
    padding-top: 26vh;
}
@media (max-width: 750px){
    padding-top: 30vh;
}
`
export const TableWrapper = styled.div`
margin-top: 5.2%;
width: 99.5%;
margin-left: auto;
margin-right: auto;
height: 84%;
overflow-y: scroll;
overflow-x: auto;
p{
    color: white;
    width: 100%;
    text-align: center;
}
table {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-spacing: 0
}
thead{
    position: sticky;
    top: 0px;
    background-color: #4a4947;
    color: #dedddc;
}
td, th{
    padding: 1.1vw;
    text-align: center;
}

tbody{
    tr{
            background-color: #e7e5e5;
        &:nth-child(even){
            background-color: #f2f2f2;
        }
        &:hover{
            background-color: #adadac;
        }
    }
}
`
export const HeaderColumn = styled.th<{ variant?: string }>`
cursor: ${props => props.variant === 'interactive' ? 'pointer' : ''};
color: #b9b9b9;
&:hover{
    color: ${props => props.variant === 'interactive' ? '#ffffff' : ''};

}
`
export const Row = styled.tr`
`