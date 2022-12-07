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

  ${props =>
    props.isDragAccept &&
    css`
      & *[aria-label='add-button'] {
        border-color: ${props => props.theme.colors.bee};
      }
    `};

  ${props =>
    props.isDragReject &&
    css`
      & *[aria-label='add-button'] {
        border-color: #ff1744;
      }
    `};
`;

export const FilesContainer = styled.section`
  display: grid;
  grid-auto-flow: row dense;

  justify-content: center;

  grid-template-columns: repeat(auto-fit, 14rem);

  gap: 2rem;

  max-height: 35rem;
  overflow-y: auto;
`;

export const ImageCard = styled.div`
  display: flex;
  justify-content: flex-end;

  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;

  &,
  & > img {
    width: 14rem;
    height: 7rem;
  }

  &:hover {
    cursor: pointer;
  }

  & > button {
    padding: 0.4rem;
    position: absolute;
    margin: 0.4rem;
  }
`;

export const AddButton = styled.button`
  display: flex;
  background: none;

  width: 14rem;
  height: 7rem;

  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.2rem dashed ${props => props.theme.colors.secondaryLight};
`;

export const NextStepButton = styled.button`
  border-radius: 200rem;
  padding: 0.8rem 8rem;

  background: ${props => props.theme.colors.bee};
  color: ${props => props.theme.colors.primary};

  max-width: 40rem;
  align-self: center;

  margin-top: 2rem;

  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05rem;

  transition: opacity 0.2s;

  &:disabled:hover {
    cursor: not-allowed;
  }

  &:disabled {
    opacity: 0.8;
  }
`;
