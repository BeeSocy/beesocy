import styled from 'styled-components';
import { breakpoint } from '../../../../../../hooks/useMobile';

export const InfoGeneralStyled = styled.div`
  display: flex;
  align-items: center;

  width: inherit;
  justify-content: space-around;

  @media (max-width: ${breakpoint}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AlignIcons = styled.section`
  display: flex;
  align-items: center;
`;

export const AlignInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const AlignOnline = styled.section`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
`;
