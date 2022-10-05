import { AnchorHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';
interface ISocialNetworkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}
export function SocialNetworkButton({
  children,
  ...props
}: ISocialNetworkProps) {
  return <Container {...props}>{children}</Container>;
}
