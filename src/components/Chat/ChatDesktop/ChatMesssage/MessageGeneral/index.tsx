import { ICardInfoProps } from '../../ChatGeneral';
import { CardsChat } from '../ContainerCards/CardsChat';
import { ContainerMsg } from '../ContainerMsg';

export const MessageCardGeneral = () => {
  return (
    <ContainerMsg>
      <CardsChat />
    </ContainerMsg>
  );
};
