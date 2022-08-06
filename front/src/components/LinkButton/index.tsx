import { ComponentProps } from 'react';
import { LinkProps } from 'react-router-dom';
import { Container } from './styles';

export interface ILinkButton extends LinkProps {
  rounded?: boolean;
  children?: JSX.Element;
}

export function LinkButton({ rounded, children, ...props }: ILinkButton) {
  return (
    <Container {...props} style={{ borderRadius: rounded ? 200 : 0 }}>
      {children}
    </Container>
  );
}
