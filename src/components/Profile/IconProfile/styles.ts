import styled from "styled-components";
import { IIconProfileProps } from ".";
import { breakpoint } from "../../../hooks/useMobile";

export const Container = styled.div`
    position: relative;
    width: fit-content;
`;

interface IIconProps {
    color: string;
}

export const Icon = styled.img<IIconProps>`
    height: 10rem;
    width: 10rem;

    border-radius: 50%;
    border: 0.4rem solid ${props => props.color};


    padding: .8rem;
    @media(max-width: ${breakpoint}){
        padding: 0;
        border: 0.8rem solid ${props => props.theme.colors.secondary};
    }

`;


interface IVipProps {
    color: string;
}
export const Vip = styled.div`
    width: 4rem;
    height: 4rem;
    background: ${props => props.color};

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    right: 0;
    bottom: 0;
`;
