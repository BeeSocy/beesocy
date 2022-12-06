import { ICardInfoProps } from '../../ChatGeneral';
import { CardsChat } from '../ContainerCards/CardsChat';
import { ContainerMsg } from './styles';

export const MessageCardGeneral = () => {
  return (
    <ContainerMsg>
      <CardsChat />
    </ContainerMsg>
  );
};
