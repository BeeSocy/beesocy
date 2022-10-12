import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaSoundcloud,
  FaTwitter
} from 'react-icons/fa';
import { Title } from '../General/Title';
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

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

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

            <span>
              Esqueceu sua <YellowTitle>senha</YellowTitle>?
            </span>

            <StyledFadeButton type="submit" full content="Entrar">
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
