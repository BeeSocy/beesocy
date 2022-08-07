import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ButtonStyle } from '../Button/styles';

interface StyledLinkButton {
  rounded?: boolean;
  wrap?: boolean;
}

export const Container = styled(Link)<StyledLinkButton>`
  ${ButtonStyle}

  border-radius: ${props => props.rounded && `100%`};

  flex-direction: ${props => (props.wrap ? 'column' : 'row')};

  gap: ${props => (props.wrap ? '0rem' : '2rem')};
`;
