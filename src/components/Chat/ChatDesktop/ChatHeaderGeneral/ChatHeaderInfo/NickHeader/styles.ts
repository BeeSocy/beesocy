import styled from 'styled-components';

export const NickStyled = styled.span`
  color: ${props => props.theme.colors.text};
  z-index: 1;
`;

export const SectionNick = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
