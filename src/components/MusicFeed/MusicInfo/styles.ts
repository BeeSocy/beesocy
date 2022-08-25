import styled, { css } from 'styled-components';

const cornerFadeStyles = css`
  content: '';

  position: absolute;

  height: 100%;
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

  span {
    max-width: 80vw;

    white-space: nowrap;

    overflow: auto;

    position: relative;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::after {
    ${cornerFadeStyles};
    right: 0;
  }

  &::before {
    left: 0;
    transform: translateX(5.8rem);
    z-index: 1;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
