import styled from 'styled-components';
import { breakpoint } from '../../../../../hooks/useMobile';

export const ContInputstyled = styled.section`
  display: flex;
  z-index: 1;
  margin-left: 0.6rem;
  margin-bottom: 0.5rem;
  justify-content: space-around;
  box-sizing: border-box;
  margin: 0.8rem;
  width: inherit;
  background: ${props => props.theme.colors.primary};
`;

export const AlingInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
