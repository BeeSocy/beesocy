import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaSoundcloud,
  FaTwitter
} from 'react-icons/fa';
import { Title } from '../General/Title';
import { FadeButton } from '../Widgets/Buttons/FadeButton';
import { Input } from '../Widgets/Input';
import {
  Container,
  StyledLogo,
  Header,
  YellowTitle,
  Content,
  LoginContainer,
  StyledFadeButton,
  SocialContainer,
  SocialTitle,
  Divider,
  SocialButtonContainer,
  SocialButton,
  StyledInput,
  SignupContainer
} from './styles';

export function Login() {
  return (
    <Container>
      <StyledLogo to="" titleIsVisible={false} />
      <Header>
        <Title size="medium">
          Inicie sua seção no <YellowTitle size="medium">BeeSocy</YellowTitle>
        </Title>
      </Header>

      <Content>
        <LoginContainer>
          <form>
            <StyledInput type="text" title="Endereço de e-mail ou usuário" />
            <StyledInput type="password" title="Senha" />

            <span>
              Esqueceu sua <YellowTitle>senha</YellowTitle>?
            </span>

            <StyledFadeButton full content="Entrar">
              <span>Entrar</span>
            </StyledFadeButton>
          </form>
        </LoginContainer>

        <Divider />

        <SocialContainer>
          <SocialTitle size="medium">
            Entrar <YellowTitle size="medium">com</YellowTitle>
          </SocialTitle>

          <SocialButtonContainer>
            <SocialButton full={false} rounded>
              <FaGoogle />
            </SocialButton>

            <SocialButton full={false} rounded>
              <FaSoundcloud />
            </SocialButton>

            <SocialButton full={false} rounded>
              <FaInstagram />
            </SocialButton>

            <SocialButton full={false} rounded>
              <FaGithub />
            </SocialButton>

            <SocialButton full={false} rounded>
              <FaTwitter />
            </SocialButton>

            <SocialButton full={false} rounded>
              <FaFacebook />
            </SocialButton>
          </SocialButtonContainer>
        </SocialContainer>

        <SignupContainer>
          <Title size="medium">
            Não possuí uma <YellowTitle size="medium">conta</YellowTitle>?
          </Title>
          <StyledFadeButton content="Cadastre-se">
            <span>Cadastre-se</span>
          </StyledFadeButton>
        </SignupContainer>
      </Content>
    </Container>
  );
}
