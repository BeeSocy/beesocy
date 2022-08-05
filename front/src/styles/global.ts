import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        background: ${props => props.theme.colors.primary};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        
        text-decoration: none;
        color: ${props => props.theme.colors.text};
        list-style: none;

        -webkit-touch-callout: none;               
        -webkit-text-size-adjust: none;          
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);       
    }

    button:hover {
        cursor: pointer;
    }
`;
