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

  &::after {
    display: block;
    content: '';
    width: 0;
    border-bottom: 0.2rem solid ${props => props.theme.colors.text};
    border-radius: 0.8rem;

    transition: all 0.3s;
  }

  &:hover {
    &::after {
      width: 80%;
    }
  }
`;
