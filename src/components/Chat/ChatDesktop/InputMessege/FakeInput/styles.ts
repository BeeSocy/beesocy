import styled from "styled-components";

export const FakeInpStyled = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;


background: ${props => `${props.theme.colors.light}30`};
color: ${props => props.theme.title};
border: 0.1rem solid ${props => props.theme.colors.light};

padding-left: 2.2rem;
border-radius: 2.6rem;
gap:10rem;
`