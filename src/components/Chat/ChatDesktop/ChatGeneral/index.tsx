import React from 'react';
import { ChatContainer } from '../ChatContainer';
import { ChatSection } from '../ChatSection/ChatSectionGeneral';
import { ChatHeader } from '../ChatHeaderGeneral/ChatHeader';
import { InputMessege } from '../InputMessege/InputGeneral';
import { useMobile } from '../../../../hooks/useMobile';
import { MobileCards } from '../../ChatMobile/CardsMobile/MobileCards';
import {
  ContainerMobile,
  SectionBoxChat
} from '../../RecentMessege/BoxCard/styles';
import { HeaderCards } from '../../ChatMobile/CardsMobile/HeaderCardGeneral';
import { SectionMessege } from '../ContainerMessegers';
import { RecentMessage } from '../../RecentMessege/General';
import { MessageCardGeneral } from '../ChatMesssage/MessageGeneral';

export const ChatGeneral = () => {
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
