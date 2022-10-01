import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

interface IStyledLinkTitle extends LinkProps {
  size?: 'large' | 'medium' | 'small';
}

export const LinkTitle = styled(Link)<IStyledLinkTitle>`
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

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
