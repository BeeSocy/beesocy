import styled from 'styled-components';

export const ChatSectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: hidden;
  height: 100%;
  background: ${props => props.theme.colors.primary};
`;
