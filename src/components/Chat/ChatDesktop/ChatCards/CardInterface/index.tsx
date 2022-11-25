import { HTMLAttributes } from 'react';
import { ChatCardStyled } from './styles';
import { CardInfo, ICardInfoProps } from '../CardInfo/InfoGeneral';

interface ICardProps extends HTMLAttributes<HTMLButtonElement> {}

const fakeback: ICardInfoProps[] = [
  {
    id: '120393x-66428dd-00y2',
    imgUrl:
      'https://i.pinimg.com/564x/1c/3f/43/1c3f43ce30c8ba4e699d20fef8ba8548.jpg',
    nickname: 'user test 01',
    online: true,
    lastmessage: 'Gang ?',
    messagetime: false
  },

  {
    id: '04700x-78118zq-90a',
    imgUrl:
      'https://i.pinimg.com/564x/65/b9/43/65b943325ab98ffa069267e0debe1d00.jpg',
    nickname: 'user test 02',
    online: true,
    lastmessage: 'Hello World',
    messagetime: false
  },

  {
    id: '67120x-93305mf-71v',
    imgUrl:
      'https://i.pinimg.com/564x/9c/f4/4c/9cf44c283007eaf92837f0fa5cfbf9aa.jpg',
    nickname: 'user test 03',
    online: false,
    lastmessage: 'Hello',
    messagetime: false
  }
];

export const ChatCards = ({ ...props }: ICardProps) => {
  return (
    <>
      {fakeback.map(value => (
        <ChatCardStyled {...props}>
          <CardInfo
            id={value.id}
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
