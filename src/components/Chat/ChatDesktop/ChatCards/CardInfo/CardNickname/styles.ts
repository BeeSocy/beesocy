import styled from 'styled-components';

export const NicknameStyled = styled.span`
  color: ${props => props.theme.colors.text};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SectionNickname = styled.section`
  width: 12.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
