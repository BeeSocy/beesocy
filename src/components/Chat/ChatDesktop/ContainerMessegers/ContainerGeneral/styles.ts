import styled from 'styled-components';

export const ContainerMsgStyled = styled.main`
  display: flex;
  overflow-y: auto;
  height: 100vh;
  background: ${props => props.theme.colors.primary};
`;
