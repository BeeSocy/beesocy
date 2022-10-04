import React from 'react';
import { ChatContainer } from '../ChatContainer';
import { BoxCards } from '../BoxCards';
import { ChatCards } from '../ChatCards/CardInterface';
import { ChatSection } from '../ChatHeader/ChatSectionGeneral';
import { ChatHeader } from '../ChatBox/ChatHeader';
export const ChatGeneral = () => {
  return (
    <ChatContainer>
      <BoxCards>
        <ChatCards />
        <ChatCards />
        <ChatCards />
        <ChatCards />
        <ChatCards />
      </BoxCards>
      
        <ChatSection> 

            <ChatHeader> </ChatHeader>

        </ChatSection>
    
    </ChatContainer>
  );
};
