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
import { ContainerSla, SectionBoxChat } from '../../BoxCard/styles';

export const ChatGeneral = () => {
  const { isMobile } = useMobile();

  return (
    <>
      {!isMobile ? (
        <ChatContainer>
          <BoxCards>
            <ChatCards />
            <ChatCards />
            <ChatCards />
            <ChatCards />
            <ChatCards />
          </BoxCards>

          <ChatSection>
            <ChatHeader />

            <ContainerMessegers> </ContainerMessegers>

            <InputMessege />
          </ChatSection>
        </ChatContainer>
      ) : (
        <>
          <ChatContainer>
            <BoxCards>
              <ChatCards />
            </BoxCards>
          </ChatContainer>
        </>
      )}
    </>
  );
};
