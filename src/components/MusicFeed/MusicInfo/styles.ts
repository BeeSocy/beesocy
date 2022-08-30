import styled, { css } from 'styled-components';
import { Title } from '../../General/Title';

const cornerFadeStyles = css`
  content: '';

  position: fixed;

  height: 2rem;
  width: 8rem;

  background: linear-gradient(
    90deg,
    transparent,
    ${props => props.theme.colors.primary}
  );
`;

export const Container = styled.div`
  display: flex;

  gap: 1.4rem;

  padding: 0.8rem;

  background: ${props => props.theme.colors.primary};

  position: relative;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 0.8rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MusicTitle = styled(Title)`
  max-width: 80vw;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
`;

interface IStyledArtists {
  overflowIsGreaterZero: boolean;
}

export const Artists = styled.span<IStyledArtists>`
  position: relative;

  max-width: 80vw;

  white-space: nowrap;

  overflow: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${props =>
    props.overflowIsGreaterZero &&
    css`
      &::before {
        ${cornerFadeStyles};
        left: 0;
        z-index: 1;

        transform: translateX(5.8rem) rotate(180deg);
      }
    `}

  &::after {
    ${cornerFadeStyles};
    right: 0;
  }
`;
