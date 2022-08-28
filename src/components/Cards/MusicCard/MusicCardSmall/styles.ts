import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../../../hooks/useMobile';
import { Button } from '../../../Widgets/Buttons/Button';
import { ButtonStyle } from '../../../Widgets/Buttons/Button/styles';
import { scaleUpAnimation } from '../../GlobalCard/styles';

import light from '../../../../styles/themes/light';
import { Title } from '../../../General/Title';

const wrapperWidth = '20rem';

export const Container = styled.div`
  width: 32rem;
`;

export const Card = styled.div`
  display: flex;

  height: fit-content;

  border-radius: 2rem;

  ${scaleUpAnimation};
  ${ButtonStyle};

  background: ${props => props.theme.colors.primary};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;

  border-radius: inherit;

  max-width: ${wrapperWidth};
`;

export const TopContainer = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  border-radius: inherit;

  position: relative;

  max-width: inherit;

  img {
    width: 4.8rem;
    height: 4.8rem;

    border-radius: 0.4rem;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  align-items: flex-end;

  position: absolute;

  padding: 0.4rem;

  width: 4.8rem;
  height: 4.8rem;

  border-radius: inherit;
`;

export const PlayButton = styled(Button)`
  align-self: center;

  padding: 0.4rem;

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

  padding: 0.8rem;

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

  align-items: center;

  justify-content: space-between;

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

  flex-direction: column;

  gap: 0.4rem;

  max-width: inherit;

  section {
    display: flex;
    gap: inherit;

    span:nth-child(4) {
      width: ${wrapperWidth};
      max-width: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
