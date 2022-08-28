import styled from 'styled-components';
import { ButtonStyle } from '../../Widgets/Buttons/Button/styles';

export const Container = styled.div`
  display: flex;

  svg {
    ${ButtonStyle};
    border-radius: 100%;
    width: 6.4rem;
    height: 6.4rem;
  }

  div[role='button']:nth-child(1) {
    transform: rotate(180deg);
  }
`;
