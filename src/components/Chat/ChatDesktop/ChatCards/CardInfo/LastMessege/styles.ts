import styled from 'styled-components';

export const LastMsgStyled = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${props => props.theme.colors.secondaryLight};
`;

export const SectionLastMessage = styled.section`
  width: 12.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
