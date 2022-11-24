import styled from 'styled-components';
import { distance } from '../../components/Profile/Container/styles';
import { breakpoint } from '../../hooks/useMobile';

export const Content = styled.div`
  margin-top: 1.2rem;
  margin-left: calc(${distance}rem + 2rem);

  padding-inline: 2.4rem;

  @media (max-width: ${breakpoint}) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;

  position: absolute;
  top: 50%;

  transform: translateY(-50%);

  justify-content: center;
  align-items: center;

  span {
    font-size: 2rem;
    font-weight: 700;
  }
`;
