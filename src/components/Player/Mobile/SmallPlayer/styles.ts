import styled, { css } from 'styled-components';

import { Button } from '../../../Widgets/Buttons/Button';

import * as SliderPrimitive from '@radix-ui/react-slider';
import { Title } from '../../../General/Title';

export const Container = styled.div`
  width: 100vw;

  background: ${props => props.theme.colors.primary};

  position: fixed;
  z-index: 80;

  right: 0;
  bottom: 6.8rem;

  animation: slideUp 0.5s both;

  @keyframes slideUp {
    from {
      bottom: -90px;
      opacity: 0;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;

  padding: 0.8rem;

  width: 100%;
`;

export const MusicContainer = styled.section`
  display: flex;

  gap: 0.4rem;

  img {
    width: 6rem;
    height: 6rem;

    border-radius: 0.8rem;
  }
`;

export const MusicDetails = styled.section`
  display: flex;

  justify-content: center;

  flex-direction: column;

  position: absolute;

  left: 8rem;
  bottom: 1.4rem;

  gap: 0.4rem;

  span {
    max-width: 18rem;

    white-space: nowrap;

    &:nth-child(2) {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (max-width: 550px) {
      max-width: 8rem;
    }
  }
`;

export const MusicInfo = styled.div`
  display: flex;

  width: 100%;

  gap: 0.2rem;

  align-content: center;
`;

export const StyledTitle = styled(Title)`
  white-space: nowrap;
  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Specs = styled.section`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  width: 40rem;

  margin-left: 2rem;
`;

export const Controls = styled.div`
  display: flex;
  gap: 0.2rem;
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

export const TimeContainer = styled.div`
  display: flex;

  gap: 0.8rem;

  width: 100%;

  white-space: nowrap;
`;

export const TimeSeconds = styled.span`
  color: ${props => props.theme.colors.light};

  letter-spacing: 0.08rem;

  font-weight: 500;
`;

export const TimebarSlider = styled(SliderPrimitive.Root)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 20rem;
  max-width: 40rem;
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

export const ExtraControls = styled.section`
  display: flex;
  gap: 0.4rem;

  align-items: center;
`;

export const VolumeSlider = styled(SliderPrimitive.Root)`
  display: flex;

  align-items: center;

  width: 12rem;
  height: 3.2rem;

  touch-action: none;

  position: relative;
`;

export const VolumeButton = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  z-index: 1;
  position: absolute;

  margin-left: 0.8rem;

  background: transparent;

  svg {
    filter: invert(1);
  }
`;

export const VolumeTrack = styled(SliderPrimitive.Track)`
  background: ${props => props.theme.colors.light};

  position: relative;

  flex: 1;

  overflow: hidden;

  border-radius: 200px;

  height: 3.2rem;
`;

export const VolumeRange = styled(SliderPrimitive.Range)`
  background: ${props => props.theme.colors.text};

  height: 100%;

  position: absolute;
`;

interface IStyledToggleLargeButton {
  active?: boolean;
}

export const ToggleLargeButton = styled(Button)<IStyledToggleLargeButton>`
  transition: transform 0.5s;

  ${props =>
    props.active
      ? css`
          transform: rotate(-180deg);
        `
      : css`
          transform: rotate(0);
        `}
`;
