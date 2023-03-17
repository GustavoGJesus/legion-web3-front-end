import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        font-family: 'Poppins', sans-serif;

        /* background: #000000; */
        color: #F0F0F0;

        /* overflow-x: hidden; */
    }

    body{
         background: #000000;
        -webkit-font-smoothing: antialiased;
         /* overflow-x: hidden; */
    }

`;