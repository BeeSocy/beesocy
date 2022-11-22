import {
  ContainerSecondaryCard,
  MessageSecondary,
  SecondaryCardStyled
} from './styles';

export const SecondaryCard = () => {
  return (
    <ContainerSecondaryCard>
      <SecondaryCardStyled>
        <MessageSecondary> Gang ? </MessageSecondary>
      </SecondaryCardStyled>
    </ContainerSecondaryCard>
  );
};
