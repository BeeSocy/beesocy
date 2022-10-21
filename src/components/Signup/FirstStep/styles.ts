import styled from 'styled-components';
import { Title } from '../../General/Title';
import { Logo } from '../../Header/Logo';
import { Button } from '../../Widgets/Buttons/Button';
import { FadeButton } from '../../Widgets/Buttons/FadeButton';

import { breakpoint } from '../../../hooks/useMobile';
import { Input } from '../../Widgets/Input';
import { StepIndicator } from '../StepIndicator';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  position: relative;

  padding: 2rem;

  border-radius: 0.8rem;

  gap: 2rem;

  height: fit-content;

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

  position: relative;

  @media (max-width: ${breakpoint}) {
    padding-bottom: 2rem;
  }
`;

export const Content = styled.main`
  form {
    display: grid;

    gap: 2rem;

    @media (min-width: ${breakpoint}) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const NextStepButton = styled(Button)`
  font-weight: 700;

  text-transform: uppercase;

  border: 0.1rem solid ${props => props.theme.colors.light};

  border-radius: 20rem;

  justify-content: center;

  height: fit-content;
`;

export const StyledStepIndicator = styled(StepIndicator)`
  position: absolute;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;
`;

export const StyledInput = styled(Input)`
  height: fit-content;
`;

export const StyledFadeButton = styled(FadeButton)`
  font-size: 1.8rem;
  font-weight: 700;

  padding-block: 1rem;
`;

export const ErrorSpan = styled.span`
  font-size: 1.4rem;
  color: #eb4034;
`;

export const YellowTitle = styled(Title)`
  color: ${props => props.theme.colors.bee};
`;
