import styled from "styled-components";

export const ContentFollow = styled.span`
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: .4rem;
    width: 100%;
`;
export const Follow = styled.span`
    color: ${props => props.theme.colors.secondaryLight};
    display: flex;
    justify-content: space-between;

    span{
        color: ${props => props.theme.colors.secondaryLight};
    }
`;