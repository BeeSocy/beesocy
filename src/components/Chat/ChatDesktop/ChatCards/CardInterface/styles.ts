import styled from "styled-components";

export const ChatCardStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 7.7rem;
width: 100%;
flex: none;
background: ${props => props.theme.colors.primary};
margin-top: 0.1rem;
border-radius: 0.5rem;
transition: 0.2s;

&:hover{
cursor: pointer;
background: ${props => props.theme.colors.light};
transition: 0.4s;
}

`;