import styled from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';
import { ButtonStyle } from '../../Widgets/Buttons/Button/styles';

const wrapperWidth = '60rem';

export const Container = styled.div`
  width: 32rem;
  border-radius: 2rem;
  width: 100%;
  ${ButtonStyle};
`;

export const Card = styled.div`
  display: flex;

  height: fit-content;

  background: ${props => props.theme.colors.primary};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;

  border-radius: inherit;

  span {
    width: ${wrapperWidth};
    max-width: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: ${breakpoint}) {
      width: 74vw;
      max-width: 74vw;
    }
  }

  img {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 0.8rem;
  }
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;
`;
