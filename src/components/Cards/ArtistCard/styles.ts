import styled from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';
import { ButtonStyle } from '../../Widgets/Buttons/Button/styles';
import { scaleUpAnimation } from '../GlobalCard/styles';

const wrapperWidth = '18rem';

export const Container = styled.div`
  max-width: 22.4rem;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;

  height: fit-content;

  border-radius: 2rem;

  ${scaleUpAnimation};
  ${ButtonStyle};

  background: ${props => props.theme.colors.primary};

  &:active {
    div {
      div {
        width: 12rem;
      }
    }
  }

  @media (min-width: ${breakpoint}) {
    &:hover {
      div {
        div {
          width: 12rem;
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  align-items: center;

  border-radius: inherit;

  max-width: ${wrapperWidth};

  img {
    width: ${wrapperWidth};
    height: ${wrapperWidth};
    border-radius: 100%;
  }
`;

interface IStyledColorBar {
  $color: string;
}

export const ColorBar = styled.div<IStyledColorBar>`
  height: 1.2rem;

  width: 6.4rem;

  margin-top: 0.8rem;

  border-radius: 4rem;

  background: ${props => props.$color};

  transition: all 0.5s;
`;
