import React from "react";
import { NicknameStyled, SectionNickname } from "./styles";
import { FakeBack,ICardInfoProps } from "../InfoGeneral";

export const NickName = ()=> {
    return <SectionNickname>
              <NicknameStyled> {FakeBack.nickname} </NicknameStyled>
            </SectionNickname>
}