import { useState, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useModal } from '../../../context/ModalProvider/useModal';

import { useSignup } from '../../../context/SignupProvider/useSignup';
import { SpiralLoading } from '../../General/Loading/Spiral';
import { Title } from '../../General/Title';
import { ResizeImage } from './ResizeImage';

import {
  Container,
  StyledLogo,
  Header,
  YellowTitle,
  StyledInput,
  ErrorSpan,
  FieldContainer,
  Content,
  NextStepButton,
  ProfilePictureContainer,
  ProfileBannerContainer
} from './styles';

interface Inputs {
  color: string;
  description: string;
  profileBanner: File;
  profilePicture: File;
}

export function SignupSecondStep() {
  const [profileBannerPreview, setProfileBannerPreview] = useState<string>();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    getValues,
    formState: { errors }
  } = useForm<Inputs>();

  const { handleSetInputsData, inputsData } = useSignup();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };
  /* handleSetInputsData({
      username: '',
      password: '',
      email: '',
      nickname: '',
      color: '',
      description: '',
      profileBanner: '',
      profilePicture: ''
    }) */

  const { handleCallModal } = useModal();

  function handleOpenResizeModal(
    image: string,
    profileImage: 'picture' | 'banner',
    stencilSize: { width: number; height: number }
  ) {
    handleCallModal(
      <ResizeImage
        image={image}
        profileImage={profileImage}
        stencilSize={stencilSize}
      />,
      {
        center: true,
        overlay: true,
        disableDrag: true
      }
    );
  }

  return (
    <Container>
      <StyledLogo to="" titleIsVisible={false} />
      <Header>
        <Title size="medium">
          Junte-se ao <YellowTitle size="medium">BeeSocy</YellowTitle>
        </Title>
      </Header>

      <Content>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <FieldContainer center>
            <span>Foto de perfil</span>

            <ProfilePictureContainer
              background={
                inputsData.profilePicture
                  ? URL.createObjectURL(inputsData.profilePicture)
                  : ''
              }
            >
              <input
                type="file"
                id="profilePicture"
                accept="image/png, image/jpeg"
                onChangeCapture={event => {
                  const target = event.target as HTMLInputElement;
                  handleSetInputsData({
                    ...inputsData,
                    profilePicture:
                      target.files !== null ? target.files[0] : undefined
                  });

                  handleOpenResizeModal(
                    target.files !== null
                      ? URL.createObjectURL(target.files[0])
                      : '',
                    'picture',
                    { width: 300, height: 300 }
                  );
                }}
                {...register('profilePicture')}
              />

              <label htmlFor="profilePicture">Alterar foto</label>
            </ProfilePictureContainer>

            {errors.profilePicture && !getValues('profilePicture').type && (
              <ErrorSpan>{errors.profilePicture.message}</ErrorSpan>
            )}
          </FieldContainer>

          <FieldContainer center>
            <span>Capa</span>

            <ProfileBannerContainer
              background={
                inputsData.profileBanner
                  ? URL.createObjectURL(inputsData.profileBanner)
                  : ''
              }
            >
              <input
                type="file"
                id="profileBanner"
                accept="image/png, image/jpeg"
                onChangeCapture={event => {
                  const target = event.target as HTMLInputElement;
                  handleSetInputsData({
                    ...inputsData,
                    profileBanner:
                      target.files !== null ? target.files[0] : undefined
                  });

                  handleOpenResizeModal(
                    target.files !== null
                      ? URL.createObjectURL(target.files[0])
                      : '',
                    'banner',
                    { width: 1440, height: 400 }
                  );
                }}
                {...register('profileBanner')}
              />

              <label htmlFor="profileBanner">Alterar foto</label>
            </ProfileBannerContainer>

            {errors.profileBanner && !getValues('profileBanner').type && (
              <ErrorSpan>{errors.profileBanner.message}</ErrorSpan>
            )}
          </FieldContainer>

          <NextStepButton type="submit">Próximo passo</NextStepButton>
        </form>
      </Content>
    </Container>
  );
}
