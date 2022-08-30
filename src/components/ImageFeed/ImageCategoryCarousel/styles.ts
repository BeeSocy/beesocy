import styled, { css } from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';

import dark from '../../../styles/themes/dark';

import { Button } from '../../Widgets/Buttons/Button';

interface IStyledCategoryContainer {
  leftFadeIsActive?: boolean;
  rightFadeIsActive?: boolean;
}

export const CategoryContainer = styled.section<IStyledCategoryContainer>`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;

  overflow: auto;

  gap: 1.2rem;

  padding: 1.2rem;
  margin-bottom: 2rem;

  scroll-behavior: smooth;

  &:before,
  &:after {
    opacity: 0;

    content: '';

    width: 3rem;
    height: 13rem;

    pointer-events: none;

    position: absolute;

    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.secondary} 30%,
      transparent
    );

    transform: translateY(-1rem);

    transition: opacity 0.3s;
  }

  &:before {
    ${props =>
      props.leftFadeIsActive &&
      css`
        opacity: 1;
      `}

    left: 0;
    margin-left: 8rem;

    @media (max-width: ${breakpoint}) {
      margin-left: 1.4rem;
    }
  }

  &:after {
    ${props =>
      props.rightFadeIsActive &&
      css`
        opacity: 1;
      `}

    right: 0;

    transform: translateY(-1rem) rotate(180deg);
    margin-right: 1.4rem;
  }
`;

interface IFilterClearButton {
  active?: boolean;
}

export const FilterClearButton = styled(Button)<IFilterClearButton>`
  gap: 0.4rem;
  justify-content: center;

  font-weight: 700;

  border-radius: 2rem;

  overflow: hidden;

  padding: 0;
  max-height: 0;

  ${props =>
    props.active &&
    css`
      max-height: 8rem;
    `}

  transition: all 0.3s linear;
`;
