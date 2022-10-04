import { useState } from 'react';
import { MdOutlineTouchApp } from 'react-icons/md';
import { useEffectOnce } from 'react-use';
import { IImageViewProps } from '..';
import { MobileCarousel, LeftSide, RightSide, TapTip } from './styles';

interface IImageViewMobileProps extends IImageViewProps {
  currentImage: number;
  handleChangeCarouselImage: (direction: 'left' | 'right') => void;
}

export function ImageViewMobile({
  img,
  name,
  currentImage,
  handleChangeCarouselImage
}: IImageViewMobileProps) {
  const [tipIsShowing, setTipIsShowing] = useState<boolean>(false);

  useEffectOnce(() => {
    setTipIsShowing(true);
  });

  return (
    <>
      {img.length > 1 ? (
        <MobileCarousel>
          <LeftSide
            onTouchStart={() => handleChangeCarouselImage('right')}
            onClick={() => handleChangeCarouselImage('right')}
          />
          <img src={img[currentImage]} alt={`Album ${name} em grande escala`} />
          <RightSide
            onTouchStart={() => handleChangeCarouselImage('left')}
            onClick={() => {
              handleChangeCarouselImage('left');
              setTipIsShowing(false);
            }}
          >
            {tipIsShowing && (
              <TapTip>
                <MdOutlineTouchApp size={48} />
                <span>Toque para passar</span>
              </TapTip>
            )}
          </RightSide>
        </MobileCarousel>
      ) : (
        <img
          src={img[0]}
          alt={`Imagem ${name} em grande escala`}
          loading="lazy"
        />
      )}
    </>
  );
}
