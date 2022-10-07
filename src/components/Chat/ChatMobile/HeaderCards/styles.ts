import styled from "styled-components";

export const HeaderCardsStyled = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 1.4rem;
border-bottom: 0.1rem solid ${props => props.theme.colors.light};
`