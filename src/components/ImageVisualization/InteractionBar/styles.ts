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

  top: 50%;
  right: 0;

  transform: translate(0%, -50%);

  border: 0.1rem solid ${props => props.theme.colors.light};

  border-radius: 2rem 0 0 2rem;

  & > div > button > svg,
  & {
    transition: transform 0.2s;
  }

  ${props =>
    props.$active
      ? css`
          transform: translate(0, -50%);
          & > div > button > svg {
            transform: rotate(180deg);
          }
        `
      : css`
          transform: translate(6rem, -50%);
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
`;

export const ContentUnBodyBar = styled.div`
  display: flex;
  align-items: center;

  height: fit-content;

  gap: 0.4rem;
  padding: 0.4rem;
  padding-right: 0.8rem;

  border-right: none;
  border-radius: inherit;

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

  & div {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

export const LikeBar = styled.div`
  z-index: 10;

  position: fixed;

  bottom: 0;
  right: 4.8rem;

  padding: 0.4rem;

  border-radius: 2rem 2rem 0 0;
  border: 1px solid ${props => props.theme.colors.light};
  border-right: none;

  background: ${props => props.theme.colors.primary};

  display: flex;
  align-items: center;

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media (max-width: ${breakpoint}) {
    bottom: 6.8rem;
  }
`;
