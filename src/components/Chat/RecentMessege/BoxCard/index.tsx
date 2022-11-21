import { ReactNode } from 'react';
import { BoxCardStyled } from './styles';

interface IBoxCardsProps {
  children: ReactNode;
}

export const BoxCards = ({ children }: IBoxCardsProps) => {
  const boxlist = [{ children }];

  /*return boxlist.map(boxlist => (
    <BoxCardStyled>{boxlist.children}</BoxCardStyled>
  ));*/

  return <BoxCardStyled>{boxlist[0].children}</BoxCardStyled>;
};
