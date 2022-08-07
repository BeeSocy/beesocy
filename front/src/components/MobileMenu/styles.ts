import styled, { css } from 'styled-components';

export const maxMobileMenuHeight = 7.0;

const MenuStyles = css`
  display: flex;
  flex: 1;
  justify-content: space-evenly;

  position: fixed;
  bottom: 0;

  width: 100vw;

  padding-block: 0.8rem;

  background: ${props => props.theme.colors.primary};
`;

export const MainContainer = styled.nav`
  ${MenuStyles}

  border-top: 0.1rem solid ${props => props.theme.colors.light};
  z-index: 90;
`;

interface StyledMenu {
  open?: boolean;
}

export const MenuContainer = styled.nav<StyledMenu>`
  ${MenuStyles}

  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding-block: ${props => (props.open ? '6.8rem' : '0')};

  height: ${props => (props.open ? '100vh' : '0')};

  transition: all 0.1s;

  overflow-y: auto;
  z-index: 80;
`;
