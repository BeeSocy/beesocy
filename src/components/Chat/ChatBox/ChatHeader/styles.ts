import styled from "styled-components";

export const HeaderStyled = styled.header`
display: flex;
flex-direction: column;

height: 6rem;
width: 100%;

border-bottom: 0.1rem solid ${props=>props.theme.colors.light};
background: ${props=>props.theme.colors.primary};
`