import { messageCard } from '../ContainerCards/CardsChat/types';
import { PrimaryCardStyled } from '../ContainerCards/PrimaryCard/styles';
import { SecondaryCardStyled } from '../ContainerCards/SecondaryCard/styles';
import { ListMessageStyled } from './styles';

interface IListProps {
  list: messageCard;
}

export const ListMessage = ({ list }: IListProps) => {
  return (
    <ListMessageStyled>
      <PrimaryCardStyled>{list.message}</PrimaryCardStyled>
    </ListMessageStyled>
  );
};
