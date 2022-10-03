import React, { ReactNode } from "react";
import { ChatSectionStyled } from "./styles";

interface IChatSectionProps {
children:ReactNode
}

export const ChatSection = ({children}: IChatSectionProps)=> {
return <ChatSectionStyled> {children} </ChatSectionStyled>
}