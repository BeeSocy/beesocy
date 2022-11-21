import {
  ContainerPrimaryCard,
  MessagePrimary,
  PrimaryCardStyled
} from './styles';

export const PrimaryCard = () => {
  return (
    <ContainerPrimaryCard>
      <PrimaryCardStyled>
        <MessagePrimary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quaerat
          eaque ex ullam reiciendis adipisci repellat repudiandae placeat
          numquam consequuntur suscipit vitae obcaecati minima corporis error
          cum veniam nesciunt officia?
        </MessagePrimary>
      </PrimaryCardStyled>
    </ContainerPrimaryCard>
  );
};
