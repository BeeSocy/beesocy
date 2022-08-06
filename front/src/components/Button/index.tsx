import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  children?: JSX.Element;
}

export function Button({ rounded, children, ...props }: IButton) {
  return (
    <Container rounded={rounded} {...props}>
      {children}
    </Container>
  );
}
