import styled from 'styled-components';
import { Title } from '../General/Title';
import { Logo } from '../Header/Logo';
import { Button } from '../Widgets/Buttons/Button';
import { FadeButton } from '../Widgets/Buttons/FadeButton';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import { breakpoint } from '../../hooks/useMobile';
import { Input } from '../Widgets/Input';

export const Container = styled.div`
  position: relative;

  padding: 2rem;

  border-radius: 0.8rem;

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

  margin-bottom: 2rem;
`;

export const YellowTitle = styled(Title)`
  color: ${props => props.theme.colors.bee};
`;

export const Content = styled.main`
  display: grid;

  grid-template-areas: 'login login login' 'divider divider divider' 'social social social' 'signup signup signup';

  gap: 0.8rem;

  @media (min-width: ${breakpoint}) {
    grid-template-areas: 'login divider social' 'signup signup signup';
    grid-template-columns: 2fr 0.2rem 1fr;
    gap: 2rem;
  }
`;

export const LoginContainer = styled.section`
  grid-area: login;

  form {
    display: flex;

    flex-direction: column;

    gap: 1.4rem;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;
`;

export const StyledInput = styled(Input)`
  height: fit-content;
`;

export const Divider = styled.div`
  display: block;

  height: 100%;
  width: 100%;

  grid-area: divider;

  background: ${props => props.theme.colors.text};
`;

export const SocialContainer = styled.section`
  display: flex;

  flex-direction: column;

  grid-area: social;

  gap: 1.4rem;

  width: 100%;

  align-items: center;
`;

export const SocialTitle = styled(Title)`
  border-bottom: 0.2rem solid ${props => props.theme.colors.text};

  height: fit-content;

  padding-bottom: 0.4rem;
`;

export const SocialButtonContainer = styled.div`
  display: flex;

  flex-wrap: wrap;

  width: 100%;

  justify-content: center;

  gap: 2rem;

  @media (max-width: ${breakpoint}) {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    justify-items: center;

    gap: 0.8rem;
  }
`;

export const SocialButton = styled(Button)`
  background: ${props => props.theme.colors.text};

  height: fit-content;
  width: fit-content;

  & * {
    fill: ${props =>
      props.theme.title === 'dark' ? light.colors.text : dark.colors.text};
  }

  &:hover,
  &:active {
    background: ${props => props.theme.colors.bee};
  }
`;

export const StyledFadeButton = styled(FadeButton)`
  font-size: 1.8rem;
  font-weight: 700;

  padding-block: 1rem;
`;

export const SignupContainer = styled.section`
  display: flex;

  flex-direction: column;

  gap: 2rem;

  align-items: center;

  grid-area: signup;

  button {
    padding-inline: 8rem;
  }
`;

export const ErrorSpan = styled.span`
  font-size: 1.4rem;
  color: #eb4034;
`;
