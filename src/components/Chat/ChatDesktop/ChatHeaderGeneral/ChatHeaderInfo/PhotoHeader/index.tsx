import React from 'react';
import { FakeBack } from '../../../ChatCards/CardInfo/InfoGeneral';
import { BoxPhoto, PhotoHeaderStyled } from './styled';

export const PhotoHeader = () => {
  return (
    <BoxPhoto>
      <PhotoHeaderStyled src={FakeBack.img} />
    </BoxPhoto>
  );
};
