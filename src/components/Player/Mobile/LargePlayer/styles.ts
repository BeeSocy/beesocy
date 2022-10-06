import styled, { css } from 'styled-components';

import Sheet from 'react-modal-sheet';

import dark from '../../../../styles/themes/dark';

import * as SliderPrimitive from '@radix-ui/react-slider';
import { Button } from '../../../Widgets/Buttons/Button';

export const StyledSheet = styled(Sheet)`
  z-index: 400 !important;

  .react-modal-sheet-container {
    width: 100vw !important;
    height: 100vh !important;

    z-index: 400 !important;

    background: ${props => props.theme.colors.secondary} !important;

    border-radius: 1.2rem !important;
  }

  .react-modal-sheet-content {
    display: flex !important;

    flex-direction: column !important;

    align-items: center !important;

    gap: 0.8rem;

    padding: 2.4rem !important;
    padding-top: 0.8rem !important;
  }
`;

export const Header = styled.section`
  display: flex;

  justify-content: space-between;

  width: 100%;
`;

export const MusicCover = styled.div`
  position: relative;

  border-radius: 0.8rem;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    border-radius: inherit;

    max-width: 32rem;
    max-height: 32rem;
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

  width: 100%;
  height: 100%;

  max-width: 32rem;
  max-height: 32rem;

  border-radius: inherit;

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

  animation: show 0.3s;

  @keyframes show {
    from {
      opacity: 0;
    }
  }
`;

export const Specs = styled.section`
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 0.8rem;

  width: 100%;
`;

export const TimeContainer = styled.div`
  display: flex;

  gap: 0.8rem;

  width: 100%;

  white-space: nowrap;
`;

export const TimeSeconds = styled.span`
  color: ${props => props.theme.colors.secondaryLight};

  letter-spacing: 0.08rem;

  font-weight: 500;
`;

export const TimebarSlider = styled(SliderPrimitive.Root)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 20rem;

  width: 100%;

  height: 2rem;

  touch-action: none;

  position: relative;
`;

export const TimebarTrack = styled(SliderPrimitive.Track)`
  background: ${props => props.theme.colors.light};

  position: relative;

  flex: 1;

  border-radius: 200px;

  height: 0.4rem;
`;

export const TimebarRange = styled(SliderPrimitive.Range)`
  background: ${props => props.theme.colors.bee};

  border-radius: inherit;

  height: 100%;

  position: absolute;
`;

export const TimebarThumb = styled(SliderPrimitive.Thumb)`
  all: unset;

  display: block;

  width: 1.2rem;
  height: 1.2rem;

  border-radius: 200px;

  background: white;

  border: 0.1rem solid ${props => props.theme.colors.light};
`;

export const Controls = styled.div`
  display: flex;

  width: 100%;

  justify-content: space-evenly;
`;

interface IStyledShuffleButton {
  active?: boolean;
}

export const ShuffleButton = styled(Button)<IStyledShuffleButton>`
  &:active {
    svg {
      animation: rotate 0.5s;
    }
  }

  @keyframes rotate {
    to {
      transform: rotate3d(1, 0, 0, 460deg);
    }
  }
`;

export const Artists = styled.span`
  color: ${props => props.theme.colors.secondaryLight};
`;
