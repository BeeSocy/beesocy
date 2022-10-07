import styled, { css } from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';
import { distance } from '../Container/styles';

export const Content = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: ${breakpoint}) {
    margin-top: 2rem;
  }
`;

export const Margin = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.primary};
`;

export const Header = styled.div`
  margin-left: calc(${distance}rem + 1.4rem);
  @media (max-width: ${breakpoint}) {
    margin-left: 0;
  }

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 4rem;
`;

interface IBreadCrumpProps {
  active: boolean;
  color: string;
}

export const BreadCrump = styled.button<IBreadCrumpProps>`
  background: transparent;

  font-size: 1.76rem;

  height: fit-content;
  height: 100%;

  ${props =>
    props.active &&
    css`
      color: ${props.color};
      border-bottom: 1px solid ${props.color};
    `}
`;
