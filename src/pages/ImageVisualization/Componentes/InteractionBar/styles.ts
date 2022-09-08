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
export const UnBodyBar = styled.div`

`;
export const Bar = styled.div`
    z-index: 10;

    position: fixed;

    right: -4rem;
    top: 0;

    height: 100vh;

    /*  */
    /*  */
    /*  */
    /*  *//* colocar um valor alto aqui em baixo para o GU ver que tem q centralizar os itens dentro do componente Button */
    &.active{
        width: 10.8rem;
    }
    width: 0;


    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`;
export const OpenBar = styled.div`
    z-index: 10;

    position: fixed;

    right: -4rem;
    top: 8rem;

    height: 5.6rem;
    width: 10.8rem;

    border-radius: 2rem;
    border: 1px solid ${(props) => props.theme.colors.light};

    background: ${props => props.theme.colors.primary};

    display: flex;
    align-items: center;

    padding: 0.8rem;
`;
export const ContentUnBodyBar = styled.div`
    --border: 2rem;

    display: flex;

    flex-direction: column;
    justify-content: space-evenly;


    padding: 0.8rem;
    gap: 1.2rem;
    padding-right: var(--border);

    border: 1px solid ${(props) => props.theme.colors.light};
    border-radius: var(--border);

    background: ${props => props.theme.colors.primary};

`;

export const Button = styled.div`

`;