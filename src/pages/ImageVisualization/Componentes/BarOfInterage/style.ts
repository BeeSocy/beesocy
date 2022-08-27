import styled from "styled-components";
import { breakpoint } from "../../../../hooks/useMobile";

export const BodyBar = styled.div`
    position: fixed;

    right: 2rem;

    width: 8rem;
    height: 40rem;

    border-radius: 2rem;

    background: red;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;



    /* @media (max-width: ${breakpoint}) {

    } */
`;