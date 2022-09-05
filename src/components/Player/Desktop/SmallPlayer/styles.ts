import styled from 'styled-components';

import { Button } from '../../../Widgets/Buttons/Button';

export const Container = styled.div`
  width: 85%;
  max-width: 164rem;

  background: ${props => props.theme.colors.primary};

  margin-inline: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.4rem;
`;

export const MusicContainer = styled.section`
  display: flex;

  gap: 0.4rem;

  img {
    width: 6.4rem;
    height: 6.4rem;
  }
`;

export const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    max-width: 14rem;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis\;;
  }
`;

export const MusicDetails = styled.section`
  display: flex;

  gap: 0.4rem;
`;

export const Specs = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Controls = styled.div`
  display: flex;
  gap: 0.4rem;
`;

interface IStyledShuffleButton {
  active?: boolean;
}

export const ShuffleButton = styled(Button)<IStyledShuffleButton>`
  &:active {
    animation: rotate 0.5s;
  }

  @keyframes rotate {
    to {
      transform: rotate3d(360deg);
    }
  }
`;
