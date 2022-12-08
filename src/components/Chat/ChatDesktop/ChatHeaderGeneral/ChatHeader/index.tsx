import React, { ReactNode } from 'react';
import { HeaderStyled } from './styles';
import { InfoGeneral } from '../ChatHeaderInfo/InfoGeneral';
import { ICardInfoProps } from '../../ChatGeneral';

export interface IChatHeaderProps {
  imgUser: string;
  nick: string;
  identification: string;
  lastmessage: string;
}

export const ChatHeader = ({
  identification,
  imgUser,
  nick,
  lastmessage
}: IChatHeaderProps) => {
  return (
    <HeaderStyled>
      <InfoGeneral
        imgUrl={imgUser}
        nickname={nick}
        id={identification}
        online={false}
        lastmessage={lastmessage}
      />
    </HeaderStyled>
  );
};
