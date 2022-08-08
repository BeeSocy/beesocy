import styled from 'styled-components';
import { LinkButton } from '../../components/LinkButton';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

export const Container = styled.section`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  gap: 2rem;

  padding-inline: 2rem;
  padding-block: 8rem;

  border-radius: 1rem;

  background: ${props => props.theme.colors.primary};

  img {
    width: 50%;
    max-width: 50rem;
    min-width: 22rem;
  }

  overflow: auto;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 1.8rem;

  letter-spacing: 0.3rem;

  text-align: center;

  color: ${props => props.theme.colors.bee};

  filter: contrast(0.9);

  /*   text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2); */
`;

export const BackButton = styled(LinkButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 50rem;

  border-radius: 1rem !important;

  font-weight: 700;
  font-size: 2rem;

  color: ${dark.colors.text};

  background: linear-gradient(90deg, #fee227, #ef6a3d);

  position: relative;
  z-index: 0;

  &:before {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    border-radius: 0.8rem;

    height: 100%;
    width: 100%;

    background: linear-gradient(270deg, #fee227, #ef6a3d);

    opacity: 0;

    content: 'Voltar ao início';

    transition: opacity 0.5s;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  &:hover,
  &:active {
    background: linear-gradient(90deg, #fee227, #ef6a3d);
  }
`;
