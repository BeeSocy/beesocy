import styled from 'styled-components';
import { Title } from '../../General/Title';

const distanceBetweenText = '1.4rem';

export const Container = styled(Title)`
  display: flex;

  align-items: center;

  gap: 0.4rem;

  padding-block: 1.8rem;

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
