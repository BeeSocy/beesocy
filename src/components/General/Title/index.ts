import styled from 'styled-components';

interface IStyledTitle {
  size?: 'large' | 'medium' | 'small';
}

export const Title = styled.span<IStyledTitle>`
  font-weight: 700;

  font-size: ${props => {
    if (props.size === 'large') {
      return '4rem';
    } else if (props.size === 'medium') {
      return '2.8rem';
    } else {
      return '1.6rem';
    }
  }};
`;
