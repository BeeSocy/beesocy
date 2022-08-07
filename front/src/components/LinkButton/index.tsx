import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
import { Container } from './styles';

export interface ILinkButton extends LinkProps {
  rounded?: boolean;
  wrap?: boolean;
  children?: ReactNode;
}

export function LinkButton({ rounded, children, wrap, ...props }: ILinkButton) {
  return (
    <Container {...props} wrap={wrap} rounded={rounded}>
      {children}
    </Container>
  );
}
