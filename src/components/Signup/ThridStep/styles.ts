import styled, { css } from 'styled-components';
import { Title } from '../../General/Title';
import { Logo } from '../../Header/Logo';
import { Button } from '../../Widgets/Buttons/Button';
import { FadeButton } from '../../Widgets/Buttons/FadeButton';

import { breakpoint } from '../../../hooks/useMobile';
import { Input } from '../../Widgets/Input';
import { ButtonStyle } from '../../Widgets/Buttons/Button/styles';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  position: relative;

  padding: 2rem;

  border-radius: 0.8rem;

  gap: 2rem;

  max-height: 90vh;

  overflow-y: auto;

  background: linear-gradient(
    0deg,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );

  @media (min-width: ${breakpoint}) {
    min-width: 70rem;
  }
`;

export const StyledLogo = styled(Logo)`
  position: absolute;

  top: 0;
  left: 50%;

  transform: translate(-50%, -9.4rem);

  && * {
    width: 8rem;
    height: 8rem;
  }
`;

export const Header = styled.section`
  display: flex;

  justify-content: center;
`;

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 0.8rem;
`;

export const YellowTitle = styled(Title)`
  color: ${props => props.theme.colors.bee};
`;

export const NextStepButton = styled(Button)`
  font-weight: 700;

  text-transform: uppercase;

  border: 0.1rem solid ${props => props.theme.colors.light};

  border-radius: 20rem;

  justify-content: center;

  height: fit-content;

  @media (min-width: ${breakpoint}) {
    grid-column: span 2;
  }
`;
