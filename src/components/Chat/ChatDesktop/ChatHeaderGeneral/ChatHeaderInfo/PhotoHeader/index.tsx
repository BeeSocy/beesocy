import React from 'react';
import { BoxPhoto, PhotoHeaderStyled } from './styled';

interface IPhotoHeaderProps {
  imageUrl: string;
}

export const PhotoHeader = ({ imageUrl }: IPhotoHeaderProps) => {
  return (
    <BoxPhoto>
      <PhotoHeaderStyled src={imageUrl} />
    </BoxPhoto>
  );
};
