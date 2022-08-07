import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  wrap?: boolean;
  children?: ReactNode;
}

export function Button({ rounded, children, wrap, ...props }: IButton) {
  return (
    <Container rounded={rounded} wrap={wrap} {...props}>
      {children}
    </Container>
  );
}
