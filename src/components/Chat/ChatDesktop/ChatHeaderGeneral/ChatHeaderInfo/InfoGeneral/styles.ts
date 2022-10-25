import styled from 'styled-components';
import { breakpoint } from '../../../../../../hooks/useMobile';

export const InfoGeneralStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${breakpoint}) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export const AlignIcons = styled.section`
  display: flex;
  align-items: center;
  margin-left: 8rem;
`;

export const AlignInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.4rem;
`;
