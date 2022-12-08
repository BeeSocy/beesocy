import { LastMsgStyled, SectionLastMessage } from './styles';

interface ILastMessageProps {
  lastmessage: string;
}
export const LastMessege = ({ lastmessage }: ILastMessageProps) => {
  return (
    <SectionLastMessage>
      {' '}
      <LastMsgStyled>{lastmessage}</LastMsgStyled>
    </SectionLastMessage>
  );
};
