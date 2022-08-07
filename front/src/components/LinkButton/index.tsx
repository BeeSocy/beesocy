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
  full,
  ...props
}: ILinkButton) {
  return (
    <Container
      {...props}
      full={full}
      style={{
        borderRadius: rounded ? '100%' : '0',
        flexDirection: wrap ? 'column' : 'row',
        gap: wrap ? '0' : '2rem'
      }}
    >
      {children}
    </Container>
  );
}
