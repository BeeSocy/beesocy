import { useLayoutEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { useModal } from '../../../context/ModalProvider/useModal';

import { useSignup } from '../../../context/SignupProvider/useSignup';
import { api } from '../../../utils/api';
import { LogoLoading } from '../../General/LogoLoading';
import { Title } from '../../General/Title';
import { SignupFirstStep } from '../FirstStep';

import {
  Container,
  StyledLogo,
  Header,
  YellowTitle,
  Content,
  NextStepButton
} from './styles';

export function SignupThirdStep() {
  const { inputsData } = useSignup();

  async function sendInputData() {
    await api.post('/user', {
      name: inputsData.nickname,
      nickname: inputsData.username,
      color: inputsData.color,
      email: inputsData.email,
      password: inputsData.password
    });
  }

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

  const { mutate, isSuccess, isLoading, isError } = useMutation(sendInputData);

  useLayoutEffect(() => {
    mutate();
  }, []);

  return (
    <Container>
      <StyledLogo to="" titleIsVisible={false} />
      <Header>
        <Title size="medium">
          Finalizando seu <YellowTitle size="medium">cadastro</YellowTitle>
        </Title>
      </Header>

      <Content>
        <>
          {!isError && !isSuccess && <LogoLoading />}
          {isSuccess && (
            <>
              <MdCheckCircle size={80} />
              <Title size="medium">Cadastro finalizado</Title>
              <NextStepButton onClick={() => handleSetOpen(false)}>
                Fechar
              </NextStepButton>
            </>
          )}
          {isError && (
            <>
              <MdError size={80} />
              <Title size="medium">Algo deu errado, tente novamente...</Title>
              <NextStepButton onClick={openSignupModal}>
                Tentar novamente
              </NextStepButton>
            </>
          )}
        </>
      </Content>
    </Container>
  );
}
