import styled from "styled-components";

export const ChatCardStyled = styled.div `
display: flex;
align-items: center;
justify-content: center;
height: 8rem;
width: 23.7rem;
background: #212121;
margin-top: 0.1rem;
border-radius: 1.8rem;
transition: 0.2s;


&:hover{
cursor: pointer;
background: #303030;
transition: 0.4s;
}

`;