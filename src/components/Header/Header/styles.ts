import styled from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';

import dark from '../../../styles/themes/dark';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  flex: 1;

  position: fixed;
  z-index: 100;

  width: 100vw;
  padding: 0.8rem;
  padding-right: 2rem;

  @media (max-width: ${breakpoint}) {
    padding-inline: 2rem;
  }

  background: ${props => props.theme.colors.primary};

  section {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    width: 100%;

    &.left {
      justify-content: flex-start;
    }

    &.center {
      justify-content: center;
    }

    &.right {
      justify-content: flex-end;
    }
  }
`;

export const SubmitButton = styled.button`
  padding-block: 0.4rem;
  padding-inline: 1.2rem;

  font-weight: 600;

  border-radius: 0.8rem;

  background: linear-gradient(90deg, #fee227, #ef6a3d);

  position: relative;

  color: ${dark.colors.text};

  &:before {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(270deg, #fee227, #ef6a3d);
    opacity: 0;

    border-radius: 0.8rem;

    content: 'Enviar';

    height: 100%;
    width: 100%;

    transition: opacity 0.5s;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }
`;
