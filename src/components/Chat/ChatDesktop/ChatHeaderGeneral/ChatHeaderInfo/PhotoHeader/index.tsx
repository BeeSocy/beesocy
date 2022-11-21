import React from 'react';
import { fakeback } from '../../../ChatCards/CardInfo/InfoGeneral';
import { BoxPhoto, PhotoHeaderStyled } from './styled';

export const PhotoHeader = () => {
  return (
    <BoxPhoto>
      <PhotoHeaderStyled src={fakeback[0].imgUrl} />
    </BoxPhoto>
  );
};
