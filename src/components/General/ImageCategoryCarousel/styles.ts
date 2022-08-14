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

interface IStyledCategoryTab {
  img: string;
  active?: boolean;
}

export const CategoryTab = styled.div<IStyledCategoryTab>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: fit-content;

  overflow: hidden;

  border-radius: 2rem;

  outline: 3px solid
    ${props =>
      props.active ? props.theme.colors.bee : props.theme.colors.light};

  background: url(${props => props.img}) no-repeat;
  background-size: cover;
  background-position-y: 50%;

  font-weight: 700;

  text-transform: capitalize;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    color: ${props =>
      props.active ? props.theme.colors.bee : dark.colors.text};

    padding: 0.5rem 1.5rem;

    background: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    cursor: pointer;
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
