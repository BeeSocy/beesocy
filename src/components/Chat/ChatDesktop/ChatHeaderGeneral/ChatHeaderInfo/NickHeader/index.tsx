import React from 'react';
import { fakeback } from '../../../ChatCards/CardInfo/InfoGeneral';
import { SectionNick, NickStyled } from './styles';

export const NickHeader = () => {
  return (
    <SectionNick>
      <NickStyled> {fakeback[0].nickname} </NickStyled>
    </SectionNick>
  );
};
