import styled, { css } from 'styled-components';

import Sheet from 'react-modal-sheet';

import dark from '../../../../styles/themes/dark';

export const StyledSheet = styled(Sheet)`
  .react-modal-sheet-container {
    width: 100vw !important;
    height: 100vh !important;

    background: ${props => props.theme.colors.secondary} !important;

    border-radius: 1.2rem !important;
  }

  .react-modal-sheet-content {
    display: flex !important;

    flex-direction: column !important;

    align-items: center !important;

    gap: 2rem;

    padding: 1.2rem !important;
  }
`;

export const Header = styled.section`
  display: flex;

  justify-content: space-between;

  width: 100%;

  margin-bottom: 0.8rem;
`;

export const MusicCover = styled.div`
  position: relative;

  border-radius: 0.8rem;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    max-width: 32rem;
    max-height: 32rem;

    object-fit: cover;
  }
`;

interface IMusicCoverActionsProps {
  active?: boolean;
}

export const MusicCoverActions = styled.section<IMusicCoverActionsProps>`
  display: flex;

  justify-content: space-around;
  align-items: center;

  position: absolute;

  background: rgba(0, 0, 0, 0.5);

  opacity: 0;

  translate: opacity 0.5s;

  width: 100%;
  height: 100%;

  button {
    height: fit-content;

    svg {
      fill: ${dark.colors.text};
    }

    &:hover,
    &:active {
      background: ${props => `${props.theme.colors.light}50`};
    }
  }

  ${props =>
    props.active &&
    css`
      opacity: 1;
    `}
`;
