import React from 'react';
import { NicknameStyled, SectionNickname } from './styles';
import { fakeback, ICardInfoProps } from '../InfoGeneral';

export const NickName = () => {
  return (
    <SectionNickname>
      <NicknameStyled> {fakeback[0].nickname} </NicknameStyled>
    </SectionNickname>
  );
};
