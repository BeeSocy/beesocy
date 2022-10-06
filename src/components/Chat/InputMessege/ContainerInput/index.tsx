import React, { ReactNode } from 'react';
import { FakeInput } from '../FakeInput';
import { ContInputstyled } from './styles';

interface IContainerInpProps {
  children: ReactNode;
}

export const ContainerInput = ({ children }: IContainerInpProps) => {
  return <ContInputstyled>{children}</ContInputstyled>;
};
