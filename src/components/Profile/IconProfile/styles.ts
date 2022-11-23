import styled from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  height: 10rem;
  width: 10rem;
  border: 0.4rem solid ${props => props.color};
  border-radius: 50%;

  background: ${props => props.theme.colors.secondary};

  @media (max-width: ${breakpoint}) {
    border: 0.8rem solid ${props => props.theme.colors.secondary};
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  padding: 0.8rem;
  @media (max-width: ${breakpoint}) {
    padding: 0;
    border: 0.8rem solid ${props => props.theme.colors.secondary};
  }
`;

interface IVipProps {
  color: string;
}
export const Vip = styled.div<IVipProps>`
  width: 4rem;
  height: 4rem;
  background: ${props => props.color};

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  right: 0;
  bottom: 0;
`;
