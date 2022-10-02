import styled from "styled-components";
import { Button } from "../../Widgets/Buttons/Button";

export const Content = styled(Button)`
    width: 90%;
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;

    border-radius: 2rem;

    font-size: 1.6rem;

    background: ${props => props.color};

    &:hover, &:active{
        background: ${props => props.color};
    }
`;