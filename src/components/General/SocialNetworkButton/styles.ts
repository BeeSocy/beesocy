import styled from "styled-components";
import { Button } from "../../Widgets/Buttons/Button";
import { ButtonStyle } from "../../Widgets/Buttons/Button/styles";

export const Container = styled.a`
    ${ButtonStyle};
    margin: 0.4rem;

    border: .2rem solid ${(props) => props.theme.colors.light};
    border-radius: 2rem;

    padding: 0.8rem;
    width: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;
`;