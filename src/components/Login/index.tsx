import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaTwitter
} from 'react-icons/fa';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useModal } from '../../context/ModalProvider/useModal';
import { api } from '../../utils/api';
import { Title } from '../General/Title';
import { SignupFirstStep } from '../Signup/FirstStep';
import { SignupSecondStep } from '../Signup/SecondStep';
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
  SignupContainer,
  ErrorSpan,
  FieldContainer
} from './styles';

interface Inputs {
  username: string;
  password: string;
}

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const { authenticate, isAuthLoading, authError } = useAuth();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const auth = await authenticate(data.username, data.password);
    if (auth === true) {
      window.location.reload();
    }
    return;
  };

  const { handleSetOpen, handleCallModal } = useModal();

  function openSignupModal() {
    handleSetOpen(false);
    handleCallModal(<SignupFirstStep />, {
      center: true,
      overlay: true,
      easyClose: false,
      fullHeight: false
    });
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldContainer>
              <Controller
                name="username"
                control={control}
                rules={{ required: 'Campo obrigatório' }}
                render={({ field }) => (
                  <StyledInput
                    type="text"
                    title="Endereço de e-mail ou usuário"
                    {...field}
                  />
                )}
              />

              {errors.username && (
                <ErrorSpan>{errors.username.message}</ErrorSpan>
              )}
            </FieldContainer>

            <FieldContainer>
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Campo obrigatório' }}
                render={({ field }) => (
                  <StyledInput type="password" title="Senha" {...field} />
                )}
              />

              {errors.password && (
                <ErrorSpan>{errors.password.message}</ErrorSpan>
              )}
            </FieldContainer>

            {authError && (
              <ErrorSpan>
                {authError.includes('inválidos')
                  ? 'Identificação ou senha inválida(s)'
                  : 'Alguma falha ocorreu, tente novamente...'}
              </ErrorSpan>
            )}

            <span>
              Esqueceu sua <YellowTitle>senha</YellowTitle>?
            </span>

            <StyledFadeButton
              loading={isAuthLoading}
              type="submit"
              full
              content="Entrar"
            >
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
              <FaSpotify />
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
          <StyledFadeButton content="Cadastre-se" onClick={openSignupModal}>
            <span>Cadastre-se</span>
          </StyledFadeButton>
        </SignupContainer>
      </Content>
    </Container>
  );
}
