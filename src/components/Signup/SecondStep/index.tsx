import { useState, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useModal } from '../../../context/ModalProvider/useModal';

import { useSignup } from '../../../context/SignupProvider/useSignup';
import { Title } from '../../General/Title';
import { SignupThirdStep } from '../ThirdStep';
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
  ProfileBannerContainer,
  StyledCirclePicker
} from './styles';

interface Inputs {
  color: string;
  description: string;
  profileBanner: File;
  profilePicture: File;
}

export function SignupSecondStep() {
  const [selectedColor, setSelectedColor] = useState<string>('');

  const {
    control,
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm<Inputs>();

  const { handleSetInputsData, inputsData } = useSignup();

  function openNextStepModal() {
    handleSetOpen(false);
    handleCallModal(<SignupThirdStep />, {
      center: true,
      overlay: true,
      easyClose: false,
      fullHeight: false
    });
  }

  const onSubmit: SubmitHandler<Inputs> = data => {
    if (inputsData.profilePicture == null) {
      setError('profilePicture', {
        type: 'required',
        message: 'Campo obrigatório'
      });
      return;
    }
    handleSetInputsData({
      ...inputsData,
      color: selectedColor,
      description: data.description || '',
      profileBanner: inputsData.profileBanner,
      profilePicture: inputsData.profilePicture
    });
    openNextStepModal();
  };

  const { handleCallModal, handleSetOpen } = useModal();

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

  const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#c2af07',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#607d8b'
  ];

  return (
    <Container>
      <StyledLogo to="" titleIsVisible={false} />
      <Header>
        <Title size="medium">
          Junte-se ao{' '}
          <YellowTitle size="medium" color={selectedColor}>
            BeeSocy
          </YellowTitle>
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
              color={selectedColor}
            >
              <input
                type="file"
                id="profilePicture"
                accept="image/png, image/jpeg, image/webp, image/jfif"
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
                accept="image/png, image/jpeg, image/webp, image/jfif"
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

          <FieldContainer center>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <StyledInput type="textarea" title="Descrição" {...field} />
              )}
            />

            {errors.description && (
              <ErrorSpan>{errors.description.message}</ErrorSpan>
            )}
          </FieldContainer>

          <FieldContainer center>
            <span>Cor favorita</span>
            <Controller
              name="color"
              rules={{ required: 'Campo obrigatório' }}
              control={control}
              render={({ field }) => (
                <StyledCirclePicker
                  colors={colors}
                  onChangeComplete={color => setSelectedColor(color.hex)}
                  {...field}
                />
              )}
            />

            {errors.color && <ErrorSpan>{errors.color.message}</ErrorSpan>}
          </FieldContainer>

          <NextStepButton type="submit">Próximo passo</NextStepButton>
        </form>
      </Content>
    </Container>
  );
}
