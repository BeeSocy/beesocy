import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.primary};

    border-radius: 2rem;

    padding: 2.8rem 2rem;

    width: 40rem;

    display: flex;
    flex-direction: column;
    align-items: center;

`;
export const TitleDescription = styled.h1`
    font-size: 2rem;

    margin-bottom: 1.6rem;
`;

export const DescriptionContent = styled.span`
    font-size: 1.36rem;
`;
export const Interaction = styled.div`
    border: 1px solid red;

    width: 100%;

    display: flex;
    justify-content: center;
`;
export const ContentInteraction = styled.div`
`;