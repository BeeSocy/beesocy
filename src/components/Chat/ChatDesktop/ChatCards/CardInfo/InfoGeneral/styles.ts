import styled from "styled-components";
import { user } from "../../../../../../pages/Profile";

export const CardInfStyled = styled.section`
    display: flex;
    align-items: center;

    gap: 1.4rem;
   
    margin-left: 0.5rem;

   
    border-radius: inherit;
`

export const CardPhoto = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 4.6rem;
    width: 4.6rem;
    z-index: 1;

    border-radius: 100%;
    border: 0.4rem solid ${user.color};
`

export const LastMesege = styled.div`
    display: flex;
    flex-direction: column;
`

export const AlignSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-left: 0.1rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const SectionLineMessage = styled.section`
    display: flex;
    height: auto;
    width: auto;
`