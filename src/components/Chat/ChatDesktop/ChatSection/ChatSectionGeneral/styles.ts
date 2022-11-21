import styled from 'styled-components';

export const ChatSectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors.primary};
`;
