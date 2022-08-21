import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Button } from '../../Widgets/Buttons/Button';
import { ButtonStyle } from '../../Widgets/Buttons/Button/styles';
import { scaleUpAnimation } from '../GlobalCard/styles';

interface IStyledMusicCardProps extends HTMLAttributes<HTMLDivElement> {
  large?: boolean;
}

const wrapperWidth = '18rem';

export const Container = styled.div<IStyledMusicCardProps>`
  display: flex;
  justify-content: center;

  padding: 1.6rem;

  height: fit-content;
  width: 100%;
  min-width: 22.4rem;

  border-radius: 2rem;

  background: ${props => props.theme.colors.primary};

  ${scaleUpAnimation};
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

    border-radius: inherit;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  height: 100%;

  position: absolute;

  width: ${wrapperWidth};

  padding: 0.8rem;
`;

export const PlayButton = styled(Button)`
  align-self: center;
`;

export const DropdownTrigger = styled.div`
  ${ButtonStyle};

  width: fit-content;

  border-radius: 100%;
`;

export const BottomContainer = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  max-width: inherit;

  gap: 0.4rem;
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
