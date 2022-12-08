import { HTMLAttributes } from 'react';
import { ChatCardStyled } from './styles';
import { CardInfo, ICardInfoProps } from '../CardInfo/InfoGeneral';

interface ICardProps extends HTMLAttributes<HTMLButtonElement> {
  id: string;
  imgUrl: string;
  nickname: string;
  lastmessage: string;
}

const fakeback: ICardInfoProps[] = [
  {
    id: '120393x-66428dd-00y2',
    imgUrl:
      'https://i.pinimg.com/564x/1c/3f/43/1c3f43ce30c8ba4e699d20fef8ba8548.jpg',
    nickname: 'Carti Play',
    online: true,
    lastmessage: 'Gang ?',
    messagetime: false
  },

  {
    id: '04700x-78118zq-90a',
    imgUrl:
      'https://i.pinimg.com/564x/65/b9/43/65b943325ab98ffa069267e0debe1d00.jpg',
    nickname: 'Miranha',
    online: true,
    lastmessage: 'Boa noite...',
    messagetime: false
  },

  {
    id: '04700x-78118zq-90a',
    imgUrl:
      'https://i.pinimg.com/736x/ec/9a/56/ec9a565bc3792132d2600a4be5034902.jpg',
    nickname: 'Mulan Games',
    online: true,
    lastmessage: 'Bom diaa!',
    messagetime: false
  },

  {
    id: '04700x-78118zq-90a',
    imgUrl:
      'https://i.pinimg.com/originals/13/91/a2/1391a285aa60521fc264ab1699b86126.jpg',
    nickname: 'Jorge',
    online: true,
    lastmessage: 'Oioi',
    messagetime: false
  },

  {
    id: '67120x-93305mf-71v',
    imgUrl:
      'https://i.pinimg.com/564x/9c/f4/4c/9cf44c283007eaf92837f0fa5cfbf9aa.jpg',
    nickname: 'Pedrin Gang',
    online: false,
    lastmessage: 'Hello',
    messagetime: false
  },

  {
    id: '04700x-78118zq-90a',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1gu9mjyNwbZPJdRHg1AaCrRBqTfMqZKVqUb75x0LoMet4vH_z7Lx0ox30uVAvPvpZ7o&usqp=CAU',
    nickname: 'Kira Paulista',
    online: true,
    lastmessage: 'Falcão te amo 💛',
    messagetime: false
  }
];

export const ChatCards = (
  { ...props },
  { id, imgUrl, lastmessage, nickname }: ICardProps
) => {
  return (
    <>
      {fakeback.map(value => (
        <ChatCardStyled {...props}>
          <CardInfo
            id={value.id}
            imgUrl={value.imgUrl}
            nickname={value.nickname}
            online={false}
            lastmessage={value.lastmessage}
            messagetime={false}
          />
        </ChatCardStyled>
      ))}
    </>
  );
};
