import { createGlobalStyle } from "styled-components";
import hub_deepfield from "@/assets/images/hub_deepfield.jpg"

export default createGlobalStyle`
body{
    background-image: url(${hub_deepfield.src});
    margin: 0;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}
`