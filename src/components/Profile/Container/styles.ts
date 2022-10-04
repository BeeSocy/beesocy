import styled from "styled-components";

export const distance = 28;

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

    justify-content: space-evenly;

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

export const NameUser = styled.div`
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem;
    }
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