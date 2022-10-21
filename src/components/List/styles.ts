import styled, { css } from "styled-components";
import { breakpoint } from "../../hooks/useMobile";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

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
    margin-bottom: 4rem;

    @media(max-width: ${breakpoint}) {
        margin-top: 4.8rem;
    }
`;

interface IBreadCrumpProps {
    active?: boolean;
}

export const BreadCrump = styled.span<IBreadCrumpProps>`
    padding: 0.4rem 2rem;

    border: 0.02rem solid ${props => props.theme.colors.secondaryLight};
    border-radius: 2rem;

    &:hover{
        cursor: pointer;
    }

    ${props => props.active && css`
    /* colocar a cor que o cara escolheu aqui */
        color: ${props.theme.colors.bee};
        border-color: ${props.theme.colors.bee};
    `}
    user-select: none;
`;

export const MusicContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 2rem;
`;

export const ImageContent = styled.div`
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(auto-fit, minmax(26.4rem, 1fr));

    justify-content: center;

    gap: 2rem;

`;

export const NotFound = styled.span`
    display: flex;

    height: 20vh;
    width: 100%;

    font-weight: bold;
    font-size: 2rem;

    justify-content: center;
    align-items: center;

`;