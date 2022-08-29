import styled from "styled-components";
import { breakpoint } from "../../../../hooks/useMobile";

export const BodyBar = styled.div`
    z-index: 10;

    position: fixed;

    right: 4rem;
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
    border: 1px solid ${(props) => props.theme.colors.light};
    button {
        justify-content: center;
    }



    /* @media (max-width: ${breakpoint}) {

    } */
`;