import styled from 'styled-components';
import { breakpoint } from '../../../../../hooks/useMobile';

export const FakeInpStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 5;
  background: ${props => `${props.theme.colors.light}30`};
  color: ${props => props.theme.title};
  border: 0.1rem solid ${props => props.theme.colors.light};
  width: 100%;
  height: 100%;
  padding-left: 2.6rem;
  border-radius: 2.6rem;

  @media (max-width: ${breakpoint}) {
    padding: 0 0 0 2.6rem;
  }
`;
