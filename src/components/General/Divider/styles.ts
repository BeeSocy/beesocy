import styled, { css } from "styled-components";
interface IDivisorProps {
    isColumn?: boolean;
}
export const Divisor = styled.div<IDivisorProps>`

    border-top: 0.1rem solid ${props => props.theme.colors.light};

    background: ${props => props.theme.colors.light};
    margin: 2rem 0;
    width: 100%;
    ${props => props.isColumn && css`
        width: 1px;
        height: 100%;
        margin: 0 2rem;
        border: none;
    `}
`;