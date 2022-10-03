import styled from "styled-components";

export const ChatCardStyled = styled.div `
display: flex;
align-items: center;
height: 7.5rem;
width: 100%;
background: ${props=>props.theme.colors.primary};
margin-top: 0.1rem;
border-radius: 1.6rem;

transition: 0.2s;


&:hover{
cursor: pointer;
background: ${props=>props.theme.colors.light};
transition: 0.4s;
}

`;