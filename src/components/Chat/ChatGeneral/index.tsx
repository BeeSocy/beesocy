import React from 'react';
import { ChatContainer } from '../ChatContainer';
import { BoxCards } from '../BoxCards';
import { ChatCards } from '../ChatCards/CardInterface';
import { ChatSection } from '../ChatSection/ChatSectionGeneral';
import { ChatHeader } from '../ChatHeaderGeneral/ChatHeader';
import { ContainerMessegers } from '../ContainerMessegers/ContainerGeneral';
import { ContainerInput } from '../InputMessege/ContainerInput';
import { InputMessege } from '../InputMessege/InputGeneral';

export const ChatGeneral = () => {
  return (
    /*Container Geral*/
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
  );
};
