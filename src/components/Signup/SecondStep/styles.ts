import styled, { css } from 'styled-components';
import { CirclePicker } from 'react-color';
import { Title } from '../../General/Title';
import { Logo } from '../../Header/Logo';
import { Button } from '../../Widgets/Buttons/Button';
import { FadeButton } from '../../Widgets/Buttons/FadeButton';

import { breakpoint } from '../../../hooks/useMobile';
import { Input } from '../../Widgets/Input';
import { ButtonStyle } from '../../Widgets/Buttons/Button/styles';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  position: relative;

  padding: 2rem;

  border-radius: 0.8rem;

  gap: 2rem;

  max-height: 90vh;

  overflow-y: auto;

  background: linear-gradient(
    0deg,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );

  @media (min-width: ${breakpoint}) {
    min-width: 70rem;
  }
`;

export const StyledLogo = styled(Logo)`
  position: absolute;

  top: 0;
  left: 50%;

  transform: translate(-50%, -9.4rem);

  && * {
    width: 8rem;
    height: 8rem;
  }
`;

export const Header = styled.section`
  display: flex;

  justify-content: center;
`;

export const Content = styled.main`
  form {
    display: grid;

    gap: 2rem;

    @media (min-width: ${breakpoint}) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const NextStepButton = styled(Button)`
  font-weight: 700;

  text-transform: uppercase;

  border: 0.1rem solid ${props => props.theme.colors.light};

  border-radius: 20rem;

  justify-content: center;

  height: fit-content;

  @media (min-width: ${breakpoint}) {
    grid-column: span 2;
  }
`;

interface IFieldContainerProps {
  center?: boolean;
}

export const FieldContainer = styled.div<IFieldContainerProps>`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;

  span:nth-child(1) {
    color: ${props => props.theme.colors.secondaryLight};
  }

  input[type='file'] {
    display: none;

    & + label {
      ${ButtonStyle};

      border: 0.1rem solid ${props => props.theme.colors.text};
      border-radius: 20rem;

      height: fit-content;
      width: fit-content;

      background: ${props => `${props.theme.colors.light}70`};

      user-select: none;
    }
  }

  ${props =>
    props.center &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

interface IProfilePictureContainerProps {
  background?: string;
  color?: string;
}

export const ProfilePictureContainer = styled.div<IProfilePictureContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 18rem;
  height: 18rem;

  border-radius: 100%;

  border: 0.3rem solid ${props => props.color};

  ${props =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-size: contain;
      background-repeat: no-repeat;
    `}
`;

export const ProfileBannerContainer = styled.div<IProfilePictureContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 9rem;

  border-radius: 0.8rem;

  border: 0.1rem solid ${props => props.theme.colors.text};

  ${props =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-repeat: no-repeat;
      background-size: 100% 9rem;
    `}
`;

export const StyledInput = styled(Input)`
  height: fit-content;

  ${props =>
    props.type === 'textarea' &&
    css`
      height: 10rem;
    `};
`;

export const StyledFadeButton = styled(FadeButton)`
  font-size: 1.8rem;
  font-weight: 700;

  padding-block: 1rem;
`;

export const ErrorSpan = styled.span`
  font-size: 1.4rem;
  color: #eb4034;
`;

interface IYellowTitleProps {
  color?: string;
}

export const YellowTitle = styled(Title)<IYellowTitleProps>`
  ${props =>
    props.color
      ? css`
          color: ${props.color};
        `
      : css`
          color: ${props.theme.colors.bee};
        `}
`;

export const StyledCirclePicker = styled(CirclePicker)``;
