import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    
    body {
        background: ${props => props.theme.colors.secondary};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    
    * {
        margin: 0;
        padding: 0;
        
        box-sizing: border-box;
        border: none;
        outline: none;
        
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        list-style: none;

        transition: background 0.3s, color 0.3s, border 0.3s;

        -webkit-touch-callout: none;               
        -webkit-text-size-adjust: none;          
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);       
    }

    button:hover {
        cursor: pointer;
    }
`;
