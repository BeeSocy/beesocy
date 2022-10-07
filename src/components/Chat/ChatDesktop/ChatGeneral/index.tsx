import React from 'react';
import { ChatContainer } from '../ChatContainer';
import { BoxCards } from '../../BoxCard';
import { ChatCards } from '../ChatCards/CardInterface';
import { ChatSection } from '../ChatSection/ChatSectionGeneral';
import { ChatHeader } from '../ChatHeaderGeneral/ChatHeader';
import { ContainerMessegers } from '../ContainerMessegers/ContainerGeneral';
import { ContainerInput } from '../InputMessege/ContainerInput';
import { InputMessege } from '../InputMessege/InputGeneral';
import { useMobile } from '../../../../hooks/useMobile';
import { MobileCards } from '../../ChatMobile/MobileCards';
import { ContainerMobile, SectionBoxChat } from '../../BoxCard/styles';
import { HeaderCards } from '../../ChatMobile/HeaderCardGeneral';
import { ContainerMessege } from '../ContainerMessegers';

export const ChatGeneral = () => {
  const { isMobile } = useMobile();

  return (
    <>
      {!isMobile ? (
        <ChatContainer>
          <SectionBoxChat>
            <BoxCards>
              <ChatCards />
              <ChatCards />
              <ChatCards />
              <ChatCards />
              <ChatCards />
              <ChatCards />
              <ChatCards />
              <ChatCards />
              <ChatCards />
            </BoxCards>
          </SectionBoxChat>

          <ChatSection>
            <ChatHeader />
            <ContainerMessege />
            <InputMessege />
          </ChatSection>
        </ChatContainer>
      ) : (
        <>
          {' '}
          <MobileCards>
            <HeaderCards title={'Chat BeeSocy'} />
            <BoxCards> </BoxCards>
          </MobileCards>
        </>
      )}
    </>
  );
};
