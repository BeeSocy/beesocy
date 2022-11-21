import react, { ReactNode } from 'react';
import { ContMessageStyled } from './styles';

interface IContainerProps {
  children: ReactNode;
}

export const ContainerMsg = ({ children }: IContainerProps) => {
  return <ContMessageStyled> {children} </ContMessageStyled>;
};
