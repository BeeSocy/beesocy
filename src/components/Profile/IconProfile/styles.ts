import styled from "styled-components";
import { IIconProfileProps } from ".";

export const Container = styled.div`
    position: relative;
`;
export const Icon = styled.img<IIconProfileProps>`
    height: 10rem;
    width: 10rem;

    border-radius: 50%;
    border: 0.4rem solid ${props => props.color};

    padding: .8rem;

`;

export const Vip = styled.div`
    width: 3.6rem;
    height: 3.6rem;
    background: ${props => props.theme.colors.bee};

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    right: 0;
    bottom: 0;
`;
