import { useEffect, useRef, useState } from 'react';
import {
  CircleStencil,
  FixedCropperRef,
  ImageRestriction
} from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';
import { SignupSecondStep } from '..';
import { useModal } from '../../../../context/ModalProvider/useModal';
import { useSignup } from '../../../../context/SignupProvider/useSignup';
import { SpiralLoading } from '../../../General/Loading/Spiral';
import { Button } from '../../../Widgets/Buttons/Button';

import { Container, StyledFixedCropper, StyledSpiralLoading } from './styles';

interface IResizeImageProps {
  image: string;
  profileImage: 'picture' | 'banner';
  stencilSize: { width: number; height: number };
}

export function ResizeImage({
  image,
  profileImage,
  stencilSize
}: IResizeImageProps) {
  const [isLoading, setIsLoading] = useState(false);

  const fixedCropperRef = useRef<FixedCropperRef>(null);

  const { handleCallModal, handleSetOptions, options } = useModal();
  const { handleSetInputsData, inputsData } = useSignup();

  async function applyResize() {
    setIsLoading(true);

    if (fixedCropperRef.current) {
      const canvas = fixedCropperRef.current?.getCanvas();

      if (canvas) {
        if (profileImage === 'picture') {
          const imageWithoutCrop = inputsData.profilePicture;

          canvas.toBlob(blob => {
            if (blob && imageWithoutCrop) {
              // let file = new File([blob], imageWithoutCrop?.name, {type: imageWithoutCrop.type});
              handleSetInputsData({ ...inputsData, profilePicture: blob });
            }
          });
        } else {
          const imageWithoutCrop = inputsData.profileBanner;

          canvas.toBlob(blob => {
            if (blob && imageWithoutCrop) {
              /*  let file = new File([blob], imageWithoutCrop?.name, {
                type: imageWithoutCrop.type
              }); */
              handleSetInputsData({
                ...inputsData,
                profileBanner: blob
              });
            }
          });
        }
      }
    }

    setTimeout(() => {
      setIsLoading(false);

      handleCallModal(<SignupSecondStep />, {
        center: true,
        overlay: true,
        easyClose: false,
        fullHeight: false
      });
    }, 500);
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
          width: stencilSize.width,
          height: stencilSize.height
        }}
        stencilComponent={
          stencilSize.width === stencilSize.height ? CircleStencil : undefined
        }
        imageRestriction={ImageRestriction.stencil}
      />

      <Button onClick={applyResize} disabled={isLoading}>
        {isLoading ? <StyledSpiralLoading /> : 'Aplicar'}
      </Button>
    </Container>
  );
}
