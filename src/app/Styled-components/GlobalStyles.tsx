import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       font-family: 'Livvic', sans-serif;
    }
    body{
        background-color: #014E56;
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 40px 20px;
        color: white;
    }
    
    
`;

export default GlobalStyles;
