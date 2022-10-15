import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useModal } from '../../../context/ModalProvider/useModal';
import { useSignup } from '../../../context/SignupProvider/useSignup';
import { Title } from '../../General/Title';
import { SignupSecondStep } from '../SecondStep';
import {
  Container,
  StyledLogo,
  Header,
  YellowTitle,
  StyledInput,
  ErrorSpan,
  FieldContainer,
  Content,
  NextStepButton
} from './styles';

interface Inputs {
  nickname: string;
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export function SignupFirstStep() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<Inputs>();

  const { handleSetInputsData, inputsData } = useSignup();

  const { handleSetOpen, handleCallModal } = useModal();

  function openNextStepModal() {
    handleSetOpen(false);
    handleCallModal(<SignupSecondStep />, {
      center: true,
      overlay: true,
      easyClose: false,
      fullHeight: false
    });
  }

  const onSubmit: SubmitHandler<Inputs> = data => {
    handleSetInputsData({
      ...inputsData,
      username: data.username,
      password: data.password,
      email: data.email,
      nickname: data.nickname
    });

    openNextStepModal();
  };

  return (
    <Container>
      <StyledLogo to="" titleIsVisible={false} />
      <Header>
        <Title size="medium">
          Junte-se ao <YellowTitle size="medium">BeeSocy</YellowTitle>
        </Title>
      </Header>

      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldContainer>
            <Controller
              name="nickname"
              control={control}
              rules={{
                required: 'Campo obrigatório',
                maxLength: { value: 24, message: 'Máximo de 24 caracteres' }
              }}
              render={({ field }) => (
                <StyledInput type="text" title="Apelido" {...field} />
              )}
            />

            {errors.nickname && (
              <ErrorSpan>{errors.nickname.message}</ErrorSpan>
            )}
          </FieldContainer>

          <FieldContainer>
            <Controller
              name="username"
              control={control}
              rules={{
                required: 'Campo obrigatório',
                maxLength: { value: 24, message: 'Máximo de 24 caracteres' },
                pattern: {
                  value: new RegExp(/^\S*$/),
                  message: 'Espaços não permitidos'
                }
              }}
              render={({ field }) => (
                <StyledInput type="text" title="Usuário" {...field} />
              )}
            />

            {errors.username && (
              <ErrorSpan>{errors.username.message}</ErrorSpan>
            )}
          </FieldContainer>

          <FieldContainer>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Campo obrigatório',
                pattern: {
                  value: new RegExp(
                    /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/
                  ),
                  message: 'Email inválido'
                }
              }}
              render={({ field }) => (
                <StyledInput
                  type="text"
                  title="Endereço de e-mail"
                  {...field}
                />
              )}
            />

            {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
          </FieldContainer>

          <FieldContainer>
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Campo obrigatório',
                minLength: { value: 8, message: 'Mínimo de 8 caracteres' },
                maxLength: { value: 32, message: 'Máximo de 32 caracteres' },
                pattern: {
                  value: new RegExp(
                    /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$/
                  ),
                  message:
                    'Ao menos 1 letra maiúscula / Ao menos 1 número / Ao menos 1 letra minúscula'
                }
              }}
              render={({ field }) => (
                <StyledInput type="password" title="Senha" {...field} />
              )}
            />

            {errors.password && (
              <ErrorSpan>{errors.password.message}</ErrorSpan>
            )}
          </FieldContainer>

          <FieldContainer>
            <Controller
              name="repeatPassword"
              control={control}
              rules={{
                required: 'Campo obrigatório',
                validate: value =>
                  value == getValues('password') || 'As senhas não conferem'
              }}
              render={({ field }) => (
                <StyledInput type="password" title="Repetir senha" {...field} />
              )}
            />

            {errors.repeatPassword && (
              <ErrorSpan>{errors.repeatPassword.message}</ErrorSpan>
            )}
          </FieldContainer>

          <NextStepButton type="submit">Próximo passo</NextStepButton>
        </form>
      </Content>
    </Container>
  );
}
