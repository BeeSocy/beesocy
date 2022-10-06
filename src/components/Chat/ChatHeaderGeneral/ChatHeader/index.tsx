import React, { ReactNode } from 'react';
import { HeaderStyled } from './styles';
import { InfoGeneral } from '../ChatHeaderInfo/InfoGeneral';

export const ChatHeader = () => {
  return (
    <HeaderStyled>
      <InfoGeneral />
    </HeaderStyled>
  );
};
