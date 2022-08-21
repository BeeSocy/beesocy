import styled from 'styled-components';

interface IStyledTitle {
  large?: boolean;
}

export const Title = styled.span<IStyledTitle>`
  font-weight: 700;

  font-size: ${props => (props.large ? '4rem' : '2rem')};
`;
