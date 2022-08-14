import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;

  position: relative;

  svg {
    fill: ${props => props.theme.colors.bee};
    animation: hearthAnimation 1s both;
  }

  &:after {
    content: '';

    position: absolute;

    border: 3.5rem solid ${props => props.theme.colors.bee};
    border-radius: 200%;

    width: 0;
    height: 0;
    opacity: 0;

    animation: shockwaveAnimation 0.5s forwards ease-out;
  }

  @keyframes hearthAnimation {
    0% {
      transform: scale(0);
    }

    20% {
      transform: scale(1.8);
    }

    80% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes shockwaveAnimation {
    100% {
      width: 60rem;
      height: 60rem;
      border-width: 0.1rem;
      opacity: 1;
    }
  }
`;
