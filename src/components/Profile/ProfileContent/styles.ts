import styled, { css } from 'styled-components';
import { ProfileCategories } from '../../../context/ProfileCategoryProvider/types';
import { breakpoint } from '../../../hooks/useMobile';

interface IContainerProps {
  activeCategory: ProfileCategories;
}

export const Container = styled.div<IContainerProps>`
  display: grid;
  grid-auto-flow: row dense;

  ${props =>
    props.activeCategory === 'image' &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(26.4rem, 1fr));
    `}

  ${props =>
    props.activeCategory === 'music' &&
    css`
      grid-template-columns: repeat(auto-fit, 20rem);
    `}

  justify-content: center;
  justify-items: center;

  gap: 2rem;
`;
