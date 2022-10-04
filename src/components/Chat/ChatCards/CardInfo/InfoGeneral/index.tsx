import { AlignSection, CardInfStyled, LastMesege } from './styles';
import { CardPhoto } from './styles';
import { PhotoProfile } from '../PhotoProfile';
import { NickName } from '../CardNickname';
import { InfoChatAlign } from '../../../InfoChatAlign';

export interface ICardInfoProps {
  img: string;
  nickname: string;
  available: boolean;
  message: string;
  messagetime: boolean;
}

export const FakeBack: ICardInfoProps = {
  img: 'https://pm1.narvii.com/7875/8cae09ff868763cd7142a591a866b021b293e271r1-602-610v2_hq.jpg',
  nickname: 'Kira Soca Fofo',
  available: false,
  message: 'hello kirinha',
  messagetime: false
};

export const CardInfo = () => {
  return (
    <CardInfStyled>
      <CardPhoto> <PhotoProfile/>  </CardPhoto>
      <AlignSection>
      
        <NickName/> 
        <LastMesege> {FakeBack.message} </LastMesege> 
      
      </AlignSection>
    </CardInfStyled>
  );
};
