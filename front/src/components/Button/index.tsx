import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  wrap?: boolean;
  full?: boolean;
  children?: ReactNode;
}

export function Button({
  rounded,
  children,
  wrap,
  full = true,
  ...props
}: IButton) {
  return (
    <Container full={full} rounded={rounded} wrap={wrap} {...props}>
      {children}
    </Container>
  );
}
