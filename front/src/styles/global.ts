import { createGlobalStyle } from 'styled-components';

import light from './themes/light';

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    
    body {
        background: ${props => props.theme.colors.secondary};

        font-family: 'Roboto', 'Segoe UI', 'sans-serif';
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
        font-weight: 400;
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

        &::-webkit-scrollbar-track {
            background-color: ${props => props.theme.colors.primary};
        }

        &::-webkit-scrollbar {
            width: 1rem;
        }

        &::-webkit-scrollbar-thumb {
            background: ${props => props.theme.colors.light};
            border-radius: 1.6rem;
            border: 0.3rem solid transparent;
            background-clip: content-box;
        }

        &::selection {
            background: ${props => props.theme.colors.bee};
            color: ${light.colors.text};
        }

        scrollbar-width: thin;
    }

    button:hover {
        cursor: pointer;
    }
`;
