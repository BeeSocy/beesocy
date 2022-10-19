import styled from 'styled-components';
import { breakpoint } from '../../../../../hooks/useMobile';

export const ContInputstyled = styled.section`
  display: flex;
  z-index: 1;
  margin-left: 0.6rem;
  margin-bottom: 0.5rem;
  gap: 1.7rem;
  background: ${props => props.theme.colors.primary};
`;

export const AlingInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
