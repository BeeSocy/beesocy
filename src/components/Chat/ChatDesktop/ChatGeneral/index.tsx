import React, { HTMLAttributes } from 'react';
import { ChatContainer } from '../ChatContainer';
import { ChatSection } from '../ChatSection/ChatSectionGeneral';
import { ChatHeader } from '../ChatHeaderGeneral/ChatHeader';
import { InputMessege } from '../InputMessege/InputGeneral';
import { useMobile } from '../../../../hooks/useMobile';
import { MobileCards } from '../../ChatMobile/CardsMobile/MobileCards';
import { SectionBoxChat } from '../../RecentMessege/BoxCard/styles';
import { HeaderCards } from '../../ChatMobile/CardsMobile/HeaderCardGeneral';
import { SectionMessege } from '../ContainerMessegers';
import { RecentMessage } from '../../RecentMessege/General';
import { MessageCardGeneral } from '../ChatMesssage/MessageGeneral';

export interface ICardInfoProps {
  id: string;
  imgUrl: string;
  nickname: string;
  online: boolean;
  lastmessage: string;
  messagetime: boolean;
}

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

export const ChatGeneral = ({
  imgUrl,
  nickname,
  online,
  lastmessage,
  messagetime,
  id
}: ICardInfoProps) => {
  const { isMobile } = useMobile();

  return (
    <>
      {!isMobile ? (
        <ChatContainer>
          <SectionBoxChat>
            <RecentMessage />
          </SectionBoxChat>

          <ChatSection>
            <ChatHeader />
            <SectionMessege>
              <MessageCardGeneral />
            </SectionMessege>
            <InputMessege />
          </ChatSection>
        </ChatContainer>
      ) : (
        <>
          {' '}
          <MobileCards>
            <HeaderCards title={'Chat BeeSocy'} />
            <RecentMessage />
          </MobileCards>
        </>
      )}
    </>
  );
};
