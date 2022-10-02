import styled, { css } from "styled-components";

export const distance = 28;

export const Wrapper = styled.main`
    display: flex;
    position: relative;

`;

export const ContentProfile = styled.div`
    background: ${props => props.theme.colors.primary};

    position: fixed;
    margin-top: 6.8rem;
    top: 4%;
    left: 8rem;

    width: ${distance}rem;
    height: 80vh;

    display: flex;
    flex-direction: column;

    flex: 0;

    padding-block: 2rem;
    padding-inline: 2rem;

    border-radius: 2rem;

    overflow-y: auto;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`;

export const TitleName = styled.span`
    font-weight: bold;
    font-size: 2rem;

    max-width: 100%;

    display: -webkit-box;
    display: -moz-box;

    -webkit-line-clamp: 3;

    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;

    white-space: normal;

    overflow: hidden;

    text-overflow: ellipsis;

    text-align: center;
`;
export const ContentFollow = styled.span`
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: .4rem;
    margin-top: 2rem;
`;
export const Follow = styled.span`
    color: ${props => props.theme.colors.secondaryLight};
    display: flex;
    justify-content: space-between;

    span{
        color: ${props => props.theme.colors.secondaryLight};
    }
`;

export const NameUser = styled.div`
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem;
    }
`;


export const ContentSocial = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Description = styled.span`
    font-size: 1.4rem;

    text-align: center;

    display: -webkit-box;
    display: -moz-box;

    -webkit-line-clamp: 8;

    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;

    white-space: normal;

    overflow: hidden;

    text-overflow: ellipsis;

    color: ${props => props.theme.colors.secondaryLight};
`;

/*  */
/*  */
export const Pinto = styled.div`
    width: 100%;
    height: 100%;
`;

export const Margin = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.primary};


`;

export const Header = styled.div`
    margin-left: calc(${distance}rem + 1.4rem);


    display: flex;
    justify-content: space-evenly;
    align-items: center;


    height: 4rem;

`;

interface IBreadCrumpProps {
    active: boolean;
}

export const BreadCrump = styled.button<IBreadCrumpProps>`
    background: transparent;


    font-size: 1.76rem;


    height: fit-content;
    height: 100%;

    ${props => props.active && css`
        color: ${props => props.theme.colors.bee};
        border-bottom: 1px solid ${props => props.theme.colors.bee};

    `}
`;