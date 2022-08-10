import styled from 'styled-components';
import { breakpoint } from '../../hooks/useMobile';

import dark from '../../styles/themes/dark';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row dense;

  grid-template-columns: repeat(auto-fit, minmax(26.4rem, 1fr));

  gap: 2rem;
`;

export const CategoryContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;

  overflow: auto;

  gap: 1.2rem;

  padding-bottom: 1.2rem;
  margin-bottom: 2rem;

  &:before,
  &:after {
    content: '';

    width: 8rem;
    height: 14rem;

    position: absolute;

    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.secondary},
      transparent
    );
  }

  &:before {
    left: 0;
    margin-left: 8rem;

    @media (max-width: ${breakpoint}) {
      margin-left: 2rem;
    }
  }

  &:after {
    right: 0;
    transform: rotate(180deg);
    margin-right: 2rem;
  }
`;

interface StyledCategory {
  img: string;
}

export const CategoryTab = styled.div<StyledCategory>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: fit-content;

  overflow: hidden;

  border-radius: 2rem;
  border: 3px solid ${props => props.theme.colors.light};

  background: url(${props => props.img}) no-repeat;
  background-size: cover;
  background-position-y: 50%;

  font-weight: 700;

  text-transform: capitalize;

  span {
    width: 100%;
    height: 100%;

    text-align: center;
    color: ${dark.colors.text};

    padding: 0.5rem 1.5rem;

    background: rgba(0, 0, 0, 0.5);
  }
`;
