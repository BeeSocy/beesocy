import { ReactNode } from 'react';
import { BoxCards } from '../../../RecentMessege/BoxCard';
import { ContainerMobile } from '../../../RecentMessege/BoxCard/styles';
import { ChatCards } from '../../../ChatDesktop/ChatCards/CardInterface';

interface IMobileCardProps {
  children: ReactNode;
}

export function MobileCards({ children }: IMobileCardProps) {
  return <ContainerMobile>{children}</ContainerMobile>;
}
