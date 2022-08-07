import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
import { Container } from './styles';

export interface ILinkButton extends LinkProps {
  rounded?: boolean;
  wrap?: boolean;
  full?: boolean;
  children?: ReactNode;
}

export function LinkButton({
  rounded,
  children,
  wrap,
  full = true,
  ...props
}: ILinkButton) {
  return (
    <Container
      {...props}
      style={{
        borderRadius: rounded ? '100%' : '0',
        flexDirection: wrap ? 'column' : 'row',
        gap: wrap ? '0' : '2rem',
        width: full ? '100%' : 'fit-content'
      }}
    >
      {children}
    </Container>
  );
}
