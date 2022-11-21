import React, { ReactNode } from 'react';
import { HeaderStyled } from './styles';
import { InfoGeneral } from '../ChatHeaderInfo/InfoGeneral';

interface IChatHeaderProps {
  children?: ReactNode;
}

export const ChatHeader = ({}: IChatHeaderProps) => {
  return (
    <HeaderStyled>
      <InfoGeneral />
    </HeaderStyled>
  );
};
