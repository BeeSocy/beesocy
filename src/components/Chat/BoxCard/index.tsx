import React, { ReactNode } from 'react';
import { BoxCardStyled } from './styles';

interface IBoxCardsProps {
  children: ReactNode;
}

export const BoxCards = ({ children }: IBoxCardsProps) => {
  return <BoxCardStyled> {children} </BoxCardStyled>;
};
