import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;
export const Title = styled.span`
    font-size: 2.8rem;
    font-weight: bold;
`;

interface Module {
    size: 'small' | 'normal' | 'large';
}
export const Card = styled.div<Module>`
    width: ${props => {
        if (props.size === 'normal') {
            return '100rem'
        } else if (props.size === 'large') {
            return '120rem'
        } else if (props.size === 'small') {
            return '80rem'
        }
    }};
    width: ${props => props.size === 'small' && '80rem'};
    width: ${props => props.size === 'large' && '80rem'};
    background-color: red;

`;