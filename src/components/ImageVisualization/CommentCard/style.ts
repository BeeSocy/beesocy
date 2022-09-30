import styled, { css } from "styled-components";
import { Button } from "../../Widgets/Buttons/Button";

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
    color: ${props => props.theme.colors.secondaryLight};
    font-size: 1.2rem;
`;

interface IStyledComment {
    $active: boolean;
}
export const Comment = styled.span<IStyledComment>`
    width: 100%;

    font-size: 1.36rem;
    display: -webkit-box;
    display: -moz-box;

    margin-top: .8rem;

    -webkit-line-clamp: 4;
    ${props => props.$active ? css`` :
        css`
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
    `}
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
`;
export const ViewMore = styled(Button)`
    display: flex;

    padding: 0.4rem .8rem;
    margin-top: 0.4rem;
    width: auto;

    border-radius: .8rem;

    color: ${props => props.theme.colors.secondaryLight};
    &:hover{
        text-decoration: underline;
        background: transparent;
    }
`;