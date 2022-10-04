import React, { ReactNode } from "react";
import { InfoChatAlignStyled } from "./styles";
import { NickName } from "../../General/IconProfile/styles";

interface IAlignProps {
children:ReactNode;
}

export const InfoChatAlign = ({children}:IAlignProps)=> {
return <InfoChatAlignStyled> {children} </InfoChatAlignStyled>
}