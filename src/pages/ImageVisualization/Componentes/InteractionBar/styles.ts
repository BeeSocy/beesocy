import styled, { css } from "styled-components";
import { Button } from "../../../../components/Widgets/Buttons/Button";
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
interface IStyledBar {
    $active: boolean;
}
interface ILikedBar {
    $liked: boolean;
}
export const Bar = styled.div<IStyledBar>`
    z-index: 10;

    position: fixed;

    right: 0;
    top: 0;

    height: 100vh;

    ${props => props.$active ? css`
        transform: translateX(0);
        & > div > button > svg{
            transform: rotate(180deg);
        }
    ` : css`
        transform: translateX(6rem);
        & > div > button > svg{
            transform: rotate(0deg);
        }
    `}

    & > div > button > svg, &{
        transition: transform .2s;
    }
    display: flex;
    align-items: center;

`;
export const ContentUnBodyBar = styled.div`
    display: flex;
    align-items: center;

    gap: 0.4rem;
    padding: 0.4rem;
    /* padding-left: 2.4rem; */

    border: 1px solid ${(props) => props.theme.colors.light};
    border-right: none;
    border-radius: 2rem 0 0 2rem;

    background: ${props => props.theme.colors.primary};

    height: 35.6rem;
    /* aqui tem q ser fixo porque sendo automático o label nn consegue detectar esse valor automatico */

    flex: 0;

    div{
        display: flex;

        flex-direction: column;
        justify-content: space-around;
        gap: 1.2rem;

    }
`;
export const ButtonBar = styled(Button)`
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    padding: .4rem;
`
export const LikeBar = styled.div`
    z-index: 10;

    position: fixed;

    right: 0;
    bottom: 11.2rem;

    height: 5.6rem;
    padding-right: 0.8rem;

    border-radius: 2rem 0 0 2rem;
    border: 1px solid ${(props) => props.theme.colors.light};
    border-right: none;

    background: ${props => props.theme.colors.primary};

    display: flex;
    align-items: center;

    svg{
        width: 3.2rem;
        height: 3.2rem;

    }
`;
