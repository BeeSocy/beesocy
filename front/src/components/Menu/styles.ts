import { ReactNode } from 'react';
import styled from 'styled-components';

interface StyledMenu {
  open?: boolean;
  hasVerticalScroll?: boolean;
  isShowMoreFollowing?: boolean;
  children: ReactNode;
}

export const Container = styled.nav<StyledMenu>`
  display: flex;
  flex-direction: column;
  flex: 1;

  position: fixed;
  z-index: 90;

  background: ${props => props.theme.colors.primary};

  width: ${props =>
    props.open
      ? '20rem'
      : props.hasVerticalScroll || props.isShowMoreFollowing
      ? '6.5rem'
      : '5.5rem'};
  height: 100vh;

  overflow-y: auto;
  overflow-x: hidden;

  padding-top: 6rem;

  svg {
    min-width: 4rem;
  }

  span {
    white-space: nowrap;
  }

  transition: width 0.05s ease-in-out;
`;

export const Line = styled.div`
  width: 100%;
  min-height: 0.05rem;

  background: ${props => props.theme.colors.light};

  margin-block: 0.5rem;
`;
