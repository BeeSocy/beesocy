import styled, { css } from 'styled-components';
import { Button } from '../../../Widgets/Buttons/Button';
import { sidebarWidth } from '../SmallPlayer/styles';

interface IStyledContainer {
  $active?: boolean;
}

export const Container = styled.div<IStyledContainer>`
  display: flex;

  justify-content: space-around;

  background: ${props => props.theme.colors.secondary};

  width: calc(100vw - ${sidebarWidth});
  height: 100vh;

  padding: 8.4rem;
  padding-top: calc(2.4rem + 6.4rem);
  padding-bottom: calc(2.4rem + 9.4rem);

  position: fixed;

  z-index: 70;

  top: 0;
  right: 0;

  ${props =>
    props.$active
      ? css`
          animation: showOn 0.5s both;
        `
      : css`
          animation: showOff 0.5s forwards;
        `}

  @keyframes showOn {
    from {
      transform: translateY(400px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes showOff {
    from {
      transform: translateY(0);
      opacity: 1;
    }

    to {
      transform: translateY(400px);
      opacity: 0;
    }
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;

  right: 2rem;
  top: 8rem;
`;

export const MusicCover = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;

  min-width: 32rem;

  max-width: 60rem;
  max-height: 60rem;

  align-self: center;

  border-radius: 1.4rem;
  overflow: hidden;

  cursor: pointer;
`;

export const Divider = styled.div`
  display: block;

  width: 0.1rem;
  height: 100%;

  background: ${props => props.theme.colors.light};

  margin-inline: 1.2rem;
`;

export const TrackListContainer = styled.section`
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 0.8rem;
`;

export const TrackListHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: fit-content;

  border-radius: 2rem;

  padding: 0.4rem 2.4rem;

  gap: 0.4rem;

  background: ${props => props.theme.colors.light};
`;

export const Tracks = styled.div`
  overflow-y: auto;

  padding: 0.8rem;
`;
