import { Link } from "react-router-dom";
import styled from "styled-components";

interface IGeneral {
    highlight?: boolean;
}

export const General = styled(Link) <IGeneral>`
    max-width: ${props => props.highlight === true ? `50rem` : 'fit-content'};

    padding: 2rem 4rem;

    border-radius: 4rem;

    background: ${props => props.theme.colors.primary};

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1.2rem;

    &:hover div[aria-label="color-line"]{
        width: 80%;
    }
`;
export const Content = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;;
    justify-content: center;
    align-items: center;

    gap: 0.8rem;

    text-align: center;

    img{
        width: 16rem;
        height: 16rem;
        border-radius: 50%;
    }


`;
export const Description = styled.span`
    text-align: center;
`;
export const Name = styled.span`
    font-weight: bold;
    font-size: 2.8rem;
    `;
interface ILine {
    background: string
}
export const Line = styled.div<ILine>`
    transition: width 0.5s;

    width: 32%;
    height: 0.8rem;

    background: ${props => props.background};

    border-radius: 2rem;
`;
export const Nick = styled.span`
    font-size: 2rem;
    color: ${props => props.theme.colors.secondaryLight};
`;
interface ILine {
    background: string
}