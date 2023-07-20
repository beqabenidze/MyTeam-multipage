import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Ubuntu', sans-serif;
    }
    body{
        background-color: #014E56;
        width: 100%;
        min-height: 100vh;
        overflow-y: hidden;
        display: flex;
        justify-content: center;
        padding: 40px 20px;
        
    }
    
    
`;

export default GlobalStyles;
