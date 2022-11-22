import { LastMsgStyled } from './styles';

interface ILastMessageProps {
  lastmessage: string;
}
export const LastMessege = ({ lastmessage }: ILastMessageProps) => {
  return <LastMsgStyled>{lastmessage}</LastMsgStyled>;
};
