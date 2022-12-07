import styled, { css } from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';
import { Input } from '../../Widgets/Input';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  max-height: 42rem;

  padding: 2rem;

  @media (min-width: ${breakpoint}) {
    max-width: 70rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0.8rem;

  gap: 0.8rem;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const YellowButton = styled.button`
  border-radius: 200rem;
  padding: 0.8rem 8rem;

  background: ${props => props.theme.colors.bee};
  color: ${props => props.theme.colors.primary};

  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

export const StyledInput = styled(Input)`
  height: fit-content;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;
`;

export const ErrorSpan = styled.span`
  font-size: 1.4rem;
  color: #eb4034;
`;
