import { ReactNode } from 'react';
import { Container, Subtitle, Title } from './styles';

interface ITitleWithLineProps {
  children: ReactNode;
  subtitle?: string;
}

export function TitleWithLine({ children, subtitle }: ITitleWithLineProps) {
  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <Title size="medium">{children}</Title>
    </Container>
  );
}
