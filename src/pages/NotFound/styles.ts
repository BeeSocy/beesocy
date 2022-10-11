import styled from 'styled-components';
import { LinkButton } from '../../components/Widgets/Buttons/LinkButton';
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
