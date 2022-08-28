import { ReactNode } from 'react';
import { Container } from './styles';

interface ITitleWithLineProps {
  children: ReactNode;
}

export function TitleWithLine({ children }: ITitleWithLineProps) {
  return <Container size="medium">{children}</Container>;
}
