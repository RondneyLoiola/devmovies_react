import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        color: #fff;
    }

    body {
        background: #000;
    }
`

export default Styles