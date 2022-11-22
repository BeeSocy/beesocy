import React from 'react';
import { SectionNick, NickStyled } from './styles';

interface INickHeaderProps {
  nickname: string;
}

export const NickHeader = ({ nickname }: INickHeaderProps) => {
  return (
    <SectionNick>
      <NickStyled> {nickname} </NickStyled>
    </SectionNick>
  );
};
