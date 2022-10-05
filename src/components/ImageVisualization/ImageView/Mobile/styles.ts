import styled, { css } from 'styled-components';

export const MobileCarousel = styled.div`
  display: flex;

  position: relative;

  user-select: none;
`;

const SideStyle = css`
  position: absolute;

  width: 50%;
  height: 100%;
`;

export const LeftSide = styled.section`
  ${SideStyle};
`;

export const RightSide = styled.section`
  ${SideStyle};

  right: 0;

  display: flex;

  justify-content: center;
  align-items: center;
`;

export const TapTip = styled.div`
  display: flex;

  gap: 0.8rem;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;

  width: 100%;
  height: 90%;

  background: ${props => `${props.theme.colors.light}60`};

  margin-right: 2.4rem;
  padding: 1.2rem;

  border-radius: 2rem;

  opacity: 0;

  animation: show 0.3s both;

  svg {
    animation: popIcon 0.8s infinite;
  }

  @keyframes show {
    to {
      opacity: 1;
    }
  }

  @keyframes popIcon {
    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
`;
