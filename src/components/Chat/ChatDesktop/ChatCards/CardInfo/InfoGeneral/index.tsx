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
  img: 'https://i.pinimg.com/564x/1c/3f/43/1c3f43ce30c8ba4e699d20fef8ba8548.jpg',
  nickname: 'Carti Malvadão',
  available: false,
  message: 'gang gang ?',
  messagetime: false
};

export const CardInfo = () => {
  return (
    <CardInfStyled>
      <CardPhoto>
        <PhotoProfile />
      </CardPhoto>
      <AlignSection>
        <NickName />
        <LastMesege> {FakeBack.message} </LastMesege>
      </AlignSection>
    </CardInfStyled>
  );
};
