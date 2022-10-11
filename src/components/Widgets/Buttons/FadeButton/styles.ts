import styled, { css } from 'styled-components';
import { Button, IButton } from '../Button';

import dark from '../../../../styles/themes/dark';

interface IContainerProps extends IButton {
  content?: string;
}

export const Container = styled(Button)<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;

  border-radius: 20rem !important;

  font-weight: 700;
  font-size: 2rem;

  color: ${dark.colors.text};

  background: linear-gradient(90deg, #fee227, #ef6a3d);

  position: relative;
  z-index: 0;

  &:before {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(270deg, #fee227, #ef6a3d);
    opacity: 0;

    border-radius: 20rem;

    content: '${props => props.content}';

    height: 100%;
    width: 100%;

    transition: opacity 0.5s;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  &:hover,
  &:active {
    background: linear-gradient(90deg, #fee227, #ef6a3d);
  }

  ${props =>
    props.full &&
    css`
      &,
      &:before {
        width: 100%;
      }
    `};

  ${props =>
    props.rounded &&
    css`
      &,
      &:before {
        border-radius: 100%;
      }
    `}
`;
