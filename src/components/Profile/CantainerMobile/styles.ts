import styled from "styled-components";

export const Content = styled.div`
    position: relative;
    height: 12rem;
    width: 100%;


`;

export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;

    background: red;

`;

export const ContentProfile = styled.div`
    position: absolute;
    bottom: 0;

    width: 100%;

    display: flex;
    justify-content: center;
    transform: translateY(5rem);
`;

export const NameProfile = styled.div`
margin-top: 1.6rem;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem;
    }
`;

interface ITitleNameProps {
    color: string;
}

export const ContainerProfile = styled.span`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
`;
export const TitleName = styled.span<ITitleNameProps>`
    border-bottom: 3px solid ${props => props.color};

    width: fit-content;

    font-weight: bold;
    font-size: 2.4rem;

    margin-top: 4rem;

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
export const ContainerFollow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    padding-block: 2rem;
    gap: 2rem;


`;
export const Format = styled.div`
    margin: 0 4rem;

    display: flex;
    flex-direction: column;

    gap: 2rem;
`;