import styled from 'styled-components';
import { longPressOptions } from '../../../../Cards/MusicCard';

export const ContainerStyled = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  height: 100vh;
  background: ${props => props.theme.colors.primary};
`;
