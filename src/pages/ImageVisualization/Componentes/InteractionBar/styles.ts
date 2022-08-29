import styled from "styled-components";
import { breakpoint } from "../../../../hooks/useMobile";

export const BodyBar = styled.div`
    position: fixed;

    right: 2rem;
    top: 10rem;


    border-radius: 2rem;

    background: ${(props) => props.theme.colors.primary};

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    padding: 0.8rem 0.8rem;
    overflow: hidden;
    button {
        justify-content: center;
    }



    /* @media (max-width: ${breakpoint}) {

    } */
`;