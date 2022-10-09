import styled, { css } from 'styled-components';

import Sheet from 'react-modal-sheet';

import dark from '../../../../styles/themes/dark';

import * as SliderPrimitive from '@radix-ui/react-slider';
import { Button } from '../../../Widgets/Buttons/Button';
import { Title } from '../../../General/Title';

export const StyledSheet = styled(Sheet)`
  z-index: 400 !important;

  .react-modal-sheet-container {
    width: 100vw !important;
    height: 100vh !important;
    max-height: -webkit-fill-available;

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

export const StyledTitle = styled(Title)`
  white-space: nowrap;

  overflow: auto;
  scrollbar-width: none;

  max-width: 80vw;

  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Artists = styled.span`
  color: ${props => props.theme.colors.secondaryLight};

  max-width: 80vw;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
`;

export const TrackListSheet = styled(Sheet)`
  z-index: 500 !important;

  .react-modal-sheet-container {
    width: 100vw !important;
    height: 80vh !important;

    z-index: 500 !important;

    background: ${props => props.theme.colors.secondary} !important;

    border-radius: 1.2rem !important;

    border: 0.1rem solid ${props => props.theme.colors.light};
  }

  .react-modal-sheet-content {
    display: flex !important;

    flex-direction: column !important;

    align-items: center !important;

    gap: 0.8rem;

    padding: 0.8rem !important;
  }
`;

export const TrackListSheetHeader = styled.section`
  display: flex;

  justify-content: center;

  align-items: center;

  font-weight: 700;

  font-size: 1.8rem;

  border-radius: 0.8rem;

  gap: 0.8rem;

  padding-top: 1.8rem;
`;

export const TrackListButton = styled.section`
  display: flex;

  background: ${props => props.theme.colors.primary};

  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  font-weight: 700;
  font-size: 1.8rem;

  width: 100%;

  border-radius: 2rem 2rem 0 0;

  padding-block: 1.8rem;

  box-shadow: 0px -10px 50px -20px rgba(0, 0, 0, 0.64);
`;
