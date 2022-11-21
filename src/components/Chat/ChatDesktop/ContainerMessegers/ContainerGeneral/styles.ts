import styled from 'styled-components';

export const ContainerMsgStyled = styled.main`
  display: flex;
  overflow-y: auto;
  height: 100vh;
  width: 100%;
  background: ${props => props.theme.colors.primary};
`;
