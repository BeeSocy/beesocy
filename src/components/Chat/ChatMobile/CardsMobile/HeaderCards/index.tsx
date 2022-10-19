import { ReactNode } from 'react';
import { HeaderCardsStyled } from './styles';

interface IHeaderCardsProps {
  children: ReactNode;
}

export const HeaderCard = ({ children }: IHeaderCardsProps) => {
  return <HeaderCardsStyled> {children} </HeaderCardsStyled>;
};
