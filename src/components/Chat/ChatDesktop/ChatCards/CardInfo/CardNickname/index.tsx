import React from 'react';
import { NicknameStyled, SectionNickname } from './styles';

interface INickNameProps {
  nickname: string;
}

export const NickName = ({ nickname }: INickNameProps) => {
  return (
    <SectionNickname>
      <NicknameStyled> {nickname} </NicknameStyled>
    </SectionNickname>
  );
};
