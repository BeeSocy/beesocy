import { useEffect, useRef } from 'react';
import {
  CircleStencil,
  FixedCropperRef,
  ImageRestriction
} from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';
import { SignupSecondStep } from '..';
import { useModal } from '../../../../context/ModalProvider/useModal';
import { useSignup } from '../../../../context/SignupProvider/useSignup';
import { Button } from '../../../Widgets/Buttons/Button';

import { Container, StyledFixedCropper } from './styles';

interface IResizeImageProps {
  image: string;
  profileImage: 'picture' | 'banner';
}

export function ResizeImage({ image, profileImage }: IResizeImageProps) {
  const fixedCropperRef = useRef<FixedCropperRef>(null);

  const { handleCallModal, handleSetOptions, options } = useModal();
  const { handleSetInputsData, inputsData } = useSignup();

  function applyResize() {
    handleCallModal(<SignupSecondStep />, {
      center: true,
      overlay: true,
      easyClose: false,
      fullHeight: false
    });

    if (fixedCropperRef.current) {
      if (profileImage === 'picture') {
        const imageWithoutCrop = inputsData.profilePicture;

        handleSetInputsData({
          ...inputsData,
          profilePicture: fixedCropperRef.current.getCanvas()?.toBlob(blob => {
            if (blob && imageWithoutCrop) {
              let file = new File([blob], imageWithoutCrop?.name, {
                type: imageWithoutCrop?.type
              });
              return file;
            }
          }, imageWithoutCrop?.type) as unknown as File
        });
      } else {
        /* handleSetInputsData({...inputsData, profileBanner: }); */
      }
    }
  }

  useEffect(() => {
    handleSetOptions({
      ...options,
      onClose: () => {
        applyResize();
      }
    });
  }, []);

  return (
    <Container>
      <StyledFixedCropper
        ref={fixedCropperRef}
        src={image}
        stencilProps={{
          handlers: false,
          lines: false,
          movable: false,
          resizable: false,
          handleClassNames: {
            default: 'handler'
          }
        }}
        stencilSize={{
          width: 300,
          height: 300
        }}
        stencilComponent={CircleStencil}
        imageRestriction={ImageRestriction.stencil}
      />

      <Button onClick={applyResize}>Aplicar</Button>
    </Container>
  );
}
