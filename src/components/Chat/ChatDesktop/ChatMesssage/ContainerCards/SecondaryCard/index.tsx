import react from 'react';
import { fakeback } from '../../../ChatCards/CardInfo/InfoGeneral';
import { ContainerSecondaryCard, SecondaryCardStyled } from './styles';

export const SecondaryCard = () => {
  return (
    <ContainerSecondaryCard>
      <SecondaryCardStyled>
        <>{fakeback[0].lastmessage}</>
      </SecondaryCardStyled>
    </ContainerSecondaryCard>
  );
};
