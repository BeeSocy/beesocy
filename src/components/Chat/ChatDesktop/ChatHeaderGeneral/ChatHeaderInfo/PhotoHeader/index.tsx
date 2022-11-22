import React from 'react';
import { FakeBack } from '../../../ChatCards/CardInfo/InfoGeneral';
import { BoxPhoto, PhotoHeaderStyled } from './styled';

interface IPhotoHeaderProps {
  color: string;
}

export const PhotoHeader = ({ color }: IPhotoHeaderProps) => {
  return (
    <BoxPhoto color={color}>
      <PhotoHeaderStyled src={FakeBack.img} />
    </BoxPhoto>
  );
};
