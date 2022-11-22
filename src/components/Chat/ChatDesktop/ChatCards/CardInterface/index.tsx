import { HTMLAttributes } from 'react';
import { ChatCardStyled } from './styles';
import { CardInfo, ICardInfoProps } from '../CardInfo/InfoGeneral';

interface ICardProps extends HTMLAttributes<HTMLButtonElement> {}

const fakeback: ICardInfoProps[] = [
  {
    imgUrl:
      'https://i.pinimg.com/564x/1c/3f/43/1c3f43ce30c8ba4e699d20fef8ba8548.jpg',
    nickname: 'User',
    online: false,
    lastmessage: 'Gang ?',
    messagetime: false
  },

  {
    imgUrl:
      'https://i.pinimg.com/564x/65/b9/43/65b943325ab98ffa069267e0debe1d00.jpg',
    nickname: 'User2',
    online: false,
    lastmessage: 'Hello World',
    messagetime: false
  }
];

export const ChatCards = ({ ...props }: ICardProps) => {
  return (
    <>
      {fakeback.map(value => (
        <ChatCardStyled {...props}>
          <CardInfo
            imgUrl={value.imgUrl}
            nickname={value.nickname}
            online={value.online}
            lastmessage={value.lastmessage}
            messagetime={value.messagetime}
          />
        </ChatCardStyled>
      ))}
    </>
  );
};
