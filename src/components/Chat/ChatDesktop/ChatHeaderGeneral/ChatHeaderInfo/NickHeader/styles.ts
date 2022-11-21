import styled from 'styled-components';
import { breakpoint } from '../../../../../../hooks/useMobile';

export const NickStyled = styled.span`
  color: ${props => props.theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0.8rem;
`;

export const SectionNick = styled.section`
  white-space: nowrap;
  overflow: hidden;
  width: 16rem;
  text-overflow: ellipsis;
  margin-left: 1.2rem;

  @media (max-width: ${breakpoint}) {
    width: 12.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
