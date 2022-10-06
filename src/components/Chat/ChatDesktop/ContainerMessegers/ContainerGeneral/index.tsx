import React, { ReactNode } from 'react';
import { ContainerMsgStyled } from './styles';
interface IContainerMensProps {
  children: ReactNode;
}
export const ContainerMessegers = ({ children }: IContainerMensProps) => {
  return <ContainerMsgStyled> {children} </ContainerMsgStyled>;
};
