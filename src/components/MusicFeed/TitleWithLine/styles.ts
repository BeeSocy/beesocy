import styled from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';
import { Title as TitleComponent } from '../../General/Title';

const distanceBetweenText = '1.4rem';

export const Container = styled.div`
  z-index: 0;
`;

export const Title = styled(TitleComponent)`
  display: flex;

  align-items: center;

  gap: 0.4rem;

  padding-bottom: 1.8rem;

  @media (min-width: ${breakpoint}) {
    white-space: nowrap;
  }

  &::after,
  &::before {
    content: '';

    width: 100%;
    height: 0.1rem;

    background-color: ${props => props.theme.colors.text};
  }

  &::before {
    width: 4rem;

    margin-right: ${distanceBetweenText};
  }

  &::after {
    margin-left: ${distanceBetweenText};
  }
`;

export const Subtitle = styled.span`
  display: flex;

  text-transform: uppercase;

  margin-left: 5rem;

  letter-spacing: 0.2rem;

  opacity: 0.6;

  @media (max-width: ${breakpoint}) {
    justify-content: center;
    margin: 0;
  }
`;
