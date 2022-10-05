import React from "react";
import { FakeBack } from "../../../ChatCards/CardInfo/InfoGeneral";
import { SectionNick, NickStyled } from "./styles";

export const NickHeader= ()=> {
return (
    <SectionNick>
        <NickStyled> {FakeBack.nickname} </NickStyled>
    </SectionNick>
);
}