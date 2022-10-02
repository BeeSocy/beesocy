import styled, { css } from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';
import { Button } from '../../Widgets/Buttons/Button';
interface IStyledBar {
  $active: boolean;
}

export const Bar = styled.div<IStyledBar>`
  display: flex;
  align-items: center;

  z-index: 10;

  position: fixed;

  right: 0;
  top: 0;

  height: 100vh;

  & > div > button > svg,
  & {
    transition: transform 0.2s;
  }

  ${props =>
    props.$active
      ? css`
          transform: translateX(0);
          & > div > button > svg {
            transform: rotate(180deg);
          }
        `
      : css`
          transform: translateX(6rem);
          & > div > button > svg {
            transform: rotate(0deg);
          }
        `}

  @media (max-height: 490px) {
    & section > button:nth-child(2) {
      display: none;
    }

    & section > button:nth-child(4) {
      order: 2;
    }
  }

  @media (max-height: 490px) and (min-width: ${breakpoint}) {
    top: 4rem;
  }
`;

export const ContentUnBodyBar = styled.div`
  display: flex;
  align-items: center;

  height: fit-content;

  gap: 0.4rem;
  padding: 0.4rem;
  padding-right: 0.8rem;

  border: 1px solid ${props => props.theme.colors.light};
  border-right: none;
  border-radius: 2rem 0 0 2rem;

  background: ${props => props.theme.colors.primary};
`;

export const ButtonBar = styled(Button)`
  width: 100%;

  min-height: 32rem;

  border-radius: 2rem;
  padding: 0.4rem;

  @media (max-height: 490px) {
    min-height: 26rem;
  }
`;

export const Actions = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  gap: 1.2rem;
`;

export const LikeBar = styled.div`
  z-index: 10;

  position: fixed;

  top: 12rem;
  left: 0;

  height: 5.6rem;
  padding-right: 0.8rem;

  border-radius: 0 2rem 2rem 0;
  border: 1px solid ${props => props.theme.colors.light};
  border-right: none;

  background: ${props => props.theme.colors.primary};

  display: flex;
  align-items: center;

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media (min-width: ${breakpoint}) {
    left: 6.4rem;
  }
`;
