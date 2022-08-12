import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyle } from '../Button/styles';
import { ILinkButton } from '.';

export const Container = styled(Link)<ILinkButton>`
  ${ButtonStyle}
`;
