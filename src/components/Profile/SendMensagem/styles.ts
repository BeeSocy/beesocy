import styled from "styled-components";
import { Button } from "../../Widgets/Buttons/Button";

export const Content = styled(Button)`
    width: 90%;
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    border-radius: 2rem;

    font-size: 1.6rem;

    border: .2rem solid ${props => props.theme.colors.light};

    &:hover, &:active{
        background: none;
    }
`;