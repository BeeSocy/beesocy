import React from "react";
import { NicknameStyled } from "./styles";
import { FakeBack,ICardInfoProps } from "../InfoGeneral";

export const NickName = ()=> {
    return <NicknameStyled> {FakeBack.nickname} </NicknameStyled>
}