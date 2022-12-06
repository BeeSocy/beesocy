import styled, { css } from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  max-height: 90vh;

  padding: 2rem;

  @media (min-width: ${breakpoint}) {
    max-width: 70rem;
  }
`;

interface IContentProps {
  isDragAccept?: boolean;
  isDragReject?: boolean;
}

export const Content = styled.div<IContentProps>`
  display: flex;
  flex-direction: column;

  border-radius: 0.8rem;

  gap: 0.8rem;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  border: 0.2rem dashed ${props => props.theme.colors.secondaryLight};

  ${props =>
    props.isDragAccept &&
    css`
      border-color: ${props => props.theme.colors.bee};
    `};

  ${props =>
    props.isDragReject &&
    css`
      border-color: #ff1744;
    `};
`;

export const LineTitle = styled.span`
  display: flex;

  gap: 0.8rem;

  align-items: center;

  font-size: 1.8rem;

  &::after,
  &::before {
    display: block;
    content: '';
    background: ${props => props.theme.colors.light};
    width: 14rem;
    height: 0.2rem;
  }
`;

export const FileButton = styled.button`
  border-radius: 200rem;
  padding: 0.8rem 8rem;

  background: ${props => props.theme.colors.bee};
  color: ${props => props.theme.colors.primary};

  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;
