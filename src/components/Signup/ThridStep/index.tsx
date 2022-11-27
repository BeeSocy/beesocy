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
    const profileImageFile = inputsData.profilePicture;
    const profileBannerFile = inputsData.profileBanner;

    let profileImageFileName;
    let profileBannerFileName;

    const formData = new FormData();

    const imageHeaders = {
      'Content-Type': 'multipart/form-data'
    };

    if (profileImageFile) {
      formData.append('profileImageFile', profileImageFile);

      await api
        .post(
          '/upload/profile/image',
          {
            file: formData.get('profileImageFile')
          },
          { headers: imageHeaders }
        )
        .then(response => {
          console.log(response.data);
          profileImageFileName = response.data;
        });
    }

    if (profileBannerFile) {
      formData.append('profileBannerFile', profileBannerFile);

      await api
        .post(
          '/upload/profile/banner',
          {
            file: formData.get('profileBannerFile')
          },
          { headers: imageHeaders }
        )
        .then(response => {
          console.log(response.data);
          profileBannerFileName = response.data;
        });
    }

    await api.post('/user', {
      name: inputsData.nickname,
      nickname: inputsData.username,
      color: inputsData.color,
      email: inputsData.email,
      password: inputsData.password,
      imageFileName: profileImageFileName,
      bannerFileName: profileBannerFileName
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
    console.log(inputsData);
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
