import { ReactNode } from 'react';
import { BoxCards } from '../../BoxCard';
import { ContainerMobile } from '../../BoxCard/styles';
import { ChatCards } from '../../ChatDesktop/ChatCards/CardInterface';

interface IMobileCardProps {
  children: ReactNode;
}

export function MobileCards({ children }: IMobileCardProps) {
  return <ContainerMobile>{children}</ContainerMobile>;
}
