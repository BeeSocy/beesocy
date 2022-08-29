import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    gap: 1rem;

    margin: 2.4rem 0;
`;
export const RightContainer = styled.div`
    width: 100%;
`;
export const InfoProfile = styled.span`
    display: flex;
    gap: 1rem;

    align-items: center;

    margin-bottom: 0.8rem;
`;
export const UserProfile = styled.span`
    font-size: 1.6rem;
    font-weight: bold;
`;

export const PostDate = styled.span`
    color: ${props => props.theme.colors.light};
    font-size: 1.2rem;
`;
export const Comment = styled.span`

    width: 100%;

    font-size: 1.36rem;
    display: -webkit-box;
    display: -moz-box;

    margin-top: .8rem;

    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
`;