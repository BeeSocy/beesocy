import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 92rem;
`;
export const ContainerChat = styled.div`
    width: 100%;

    background: ${(props) => props.theme.colors.primary};

    padding: 2.8rem 2rem;

    border-radius: 2rem;
`;
export const Comment = styled.div`

    display: flex;
    justify-content: space-between;

    gap: 2rem;


`;
export const ContainerComment = styled.label`
    border-radius: 1.2rem;
    border: 1px solid ${props => props.theme.colors.light};

    width: 100%;
    height: 10rem;
    padding: 0.4rem;

    position: relative;

`;
export const InputComment = styled.textarea`
    &:focus{
    outline: none;

    }
    background: none;

    padding: 1rem;


    width: 100%;
    height: 100%;

    white-space: pre-line;

    overflow-y: auto;

    resize: none;

    outline: none;
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

`;
export const ButtonSend = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
`;
export const Divider = styled.div`
    width: 100%;
    height: 1px;

    background: ${props => props.theme.colors.light};
    margin: 2rem 0;
`;