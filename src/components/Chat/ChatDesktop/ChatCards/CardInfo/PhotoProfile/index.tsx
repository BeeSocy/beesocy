import React from 'react';
import { fakeback } from '../InfoGeneral';
import { PhotoProfStyled } from './styles';

export const PhotoProfile = () => {
  return <PhotoProfStyled src={fakeback[0].imgUrl} />;
};
