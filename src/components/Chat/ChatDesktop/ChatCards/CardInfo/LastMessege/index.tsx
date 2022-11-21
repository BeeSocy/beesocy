import { fakeback } from '../InfoGeneral';
import { LastMsgStyled } from './styles';

export const LastMessege = () => {
  return <LastMsgStyled>{fakeback[0].lastmessage}</LastMsgStyled>;
};
