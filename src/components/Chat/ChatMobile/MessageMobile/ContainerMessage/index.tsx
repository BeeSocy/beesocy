import react, { ReactNode } from 'react';
import { ContainerStyled } from './styles';

interface IContainerMessageProps {
  children: ReactNode;
}

export const ContainerMessage = ({ children }: IContainerMessageProps) => {
  return <ContainerStyled> {children} </ContainerStyled>;
};
