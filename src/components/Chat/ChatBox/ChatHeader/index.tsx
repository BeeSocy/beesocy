import React, { ReactNode } from "react";
import { HeaderStyled } from "./styles";

interface IChatHeaderProps {
children:ReactNode
}

export const ChatHeader = ({children}:IChatHeaderProps)=> {

    return <HeaderStyled> {children} </HeaderStyled>
}