import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../../../hooks/useMobile';
import { Button } from '../../../Widgets/Buttons/Button';
import { ButtonStyle } from '../../../Widgets/Buttons/Button/styles';
import { scaleUpAnimation } from '../../GlobalCard/styles';

import light from '../../../../styles/themes/light';
import { Title } from '../../../General/Title';

const wrapperWidth = '18rem';

export const Container = styled.div`
  max-width: 22.4rem;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;

  height: fit-content;

  border-radius: 2rem;

  ${scaleUpAnimation};
  ${ButtonStyle};

  background: ${props => props.theme.colors.primary};

  &:hover {
    *[role='button'] {
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  border-radius: inherit;

  max-width: ${wrapperWidth};
`;

export const TopContainer = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

  padding: 0.4rem;

  border-radius: inherit;

  position: relative;

  max-width: inherit;

  img {
    width: ${wrapperWidth};
    height: ${wrapperWidth};

    border-radius: inherit;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  position: absolute;

  padding: 0.4rem;

  width: ${wrapperWidth};
  height: ${wrapperWidth};

  border-radius: inherit;

  &:active {
    background: rgba(0, 0, 0, 0.5);
  }

  @media (min-width: ${breakpoint}) {
    *[role='button'] {
      opacity: 0;
      transition: all 0.5s;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const PlayButton = styled(Button)`
  align-self: center;

  &:active {
    background: ${light.colors.light}75;
  }

  @media (min-width: ${breakpoint}) {
    &:hover {
      background: ${light.colors.light}75;
    }
  }
`;

export const DropdownTrigger = styled.div`
  ${ButtonStyle};

  width: fit-content;

  border-radius: 100%;

  cursor: pointer;

  &:active {
    background: ${light.colors.light}75;
  }

  @media (min-width: ${breakpoint}) {
    &:hover {
      background: ${light.colors.light}75;
    }
  }
`;

export const BottomContainer = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  max-width: inherit;

  gap: 0.4rem;
`;

export const MusicName = styled(Title)`
  max-width: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Details = styled.section`
  display: flex;

  gap: 0.4rem;

  max-width: inherit;

  span:nth-child(4) {
    max-width: inherit;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
