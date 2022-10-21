import styled from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';

export const StepIndicatorContainer = styled.div`
  display: flex;

  align-items: center;

  width: 100%;
  height: 100%;

  gap: 0.4rem;

  @media (max-width: ${breakpoint}) {
    justify-content: center;
    top: 2.4rem;
  }
`;

export const StyledStepIndicator = styled.span`
  display: flex;

  justify-content: center;
  align-items: center;

  border: 0.1rem solid ${props => props.theme.colors.text};
  border-radius: 100%;

  padding: 1.4rem;

  width: 0.1rem;
  height: 0.1rem;
`;

export const StepWay = styled.span`
  display: flex;

  justify-content: center;
  align-items: center;

  border: 0.1rem solid ${props => props.theme.colors.text};
  border-radius: 100%;

  padding: 0.24rem;

  width: 0.1rem;
  height: 0.1rem;
`;
