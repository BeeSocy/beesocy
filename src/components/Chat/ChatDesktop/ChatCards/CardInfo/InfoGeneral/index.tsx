import { AlignSection, CardInfStyled } from './styles';
import { CardPhoto } from './styles';
import { PhotoProfile } from '../PhotoProfile';
import { NickName } from '../CardNickname';
import { LastMessege } from '../LastMessege';
import { ReactNode } from 'react';

export interface ICardInfoProps {
  [x: string]: ReactNode;
  imgUrl: string;
  nickname: string;
  available: boolean;
  lastmessage: string;
  messagetime: boolean;
}

export const fakeback: ICardInfoProps[] = [
  {
    imgUrl:
      'https://i.pinimg.com/564x/1c/3f/43/1c3f43ce30c8ba4e699d20fef8ba8548.jpg',
    nickname: 'Playboi Carti Playboi Carti Playboi Carti Playboi Carti',
    available: false,
    lastmessage: 'Gang ?',
    messagetime: false
  },

  {
    imgUrl:
      'https://i.pinimg.com/564x/65/b9/43/65b943325ab98ffa069267e0debe1d00.jpg',
    nickname: 'Juliano PHP',
    available: false,
    lastmessage: 'Fala paizão',
    messagetime: false
  }
];

export const CardInfo = () => {
  return (
    <CardInfStyled>
      <CardPhoto>
        <PhotoProfile />
      </CardPhoto>
      <AlignSection>
        <NickName />
        <LastMessege />
      </AlignSection>
    </CardInfStyled>
  );
};

export const CardInfoSecondary = () => {
  return (
    <CardInfStyled>
      <CardPhoto>
        <PhotoProfile />
      </CardPhoto>
      <AlignSection>
        <NickName />
        <LastMessege />
      </AlignSection>
    </CardInfStyled>
  );
};
