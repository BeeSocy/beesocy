import { ReactNode } from 'react';
import { ContainerMessegers } from './ContainerGeneral';

interface ISectionProps {
  children: ReactNode;
}

export const SectionMessege = ({ children }: ISectionProps) => {
  return <ContainerMessegers> {children} </ContainerMessegers>;
};
