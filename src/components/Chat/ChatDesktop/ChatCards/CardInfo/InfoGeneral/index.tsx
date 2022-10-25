import { AlignSection, CardInfStyled } from './styles';
import { CardPhoto } from './styles';
import { PhotoProfile } from '../PhotoProfile';
import { NickName } from '../CardNickname';
import { InfoChatAlign } from '../../../InfoChatAlign';
import { LastMessege } from '../LastMessege';

export interface ICardInfoProps {
  img: string;
  nickname: string;
  available: boolean;
  message: string;
  messagetime: boolean;
}

export const FakeBack: ICardInfoProps = {
  img: 'https://i.pinimg.com/564x/1c/3f/43/1c3f43ce30c8ba4e699d20fef8ba8548.jpg',
  nickname: 'Playboi Carti',
  available: false,
  message: 'gang ?',
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
        <LastMessege />
      </AlignSection>
    </CardInfStyled>
  );
};
