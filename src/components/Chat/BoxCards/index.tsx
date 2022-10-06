import React, { ReactNode } from 'react';
import { useMobile } from '../../../hooks/useMobile';
import { BoxCardStyled } from './styles';

interface IBoxCardsProps {
  children: ReactNode;
}

export const BoxCards = ({ children }: IBoxCardsProps) => {
  const { isMobile } = useMobile();

  return <BoxCardStyled> {children} </BoxCardStyled>;
};
