import {
  ContainerSecondaryCard,
  MessageSecondary,
  SecondaryCardStyled
} from './styles';

export const SecondaryCard = () => {
  return (
    <ContainerSecondaryCard>
      <SecondaryCardStyled>
        <MessageSecondary></MessageSecondary>
      </SecondaryCardStyled>
    </ContainerSecondaryCard>
  );
};
