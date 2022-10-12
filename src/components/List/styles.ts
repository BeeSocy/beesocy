import styled from "styled-components";
import { breakpoint } from "../../hooks/useMobile";

export const Container = styled.div`
    width: 100%;
    min-height: 40vh;

    background: ${props => props.theme.colors.primary};

    padding: 2rem 4rem;

    border-radius: 2rem;


    `;

export const Header = styled.section`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
`;

export const Title = styled.span`
    font-size: 3.2rem;
    font-weight: bold;

    position: absolute;
    top: 0;

`;

export const BreadCrumpContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    flex-wrap: wrap;

    gap: 2rem;

    @media(max-width: ${breakpoint}) {
        margin-top: 4.8rem;
    }
`;

export const BreadCrump = styled.span`
    padding: 0.4rem 2rem;

    border: 0.02rem solid ${props => props.theme.colors.secondaryLight};
    border-radius: 2rem;

`;