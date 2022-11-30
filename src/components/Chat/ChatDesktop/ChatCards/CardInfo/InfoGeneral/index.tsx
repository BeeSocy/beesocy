import { AlignSection, CardInfStyled } from './styles';
import { CardPhoto } from './styles';
import { PhotoProfile } from '../PhotoProfile';
import { NickName } from '../CardNickname';
import { LastMessege } from '../LastMessege';
import { Online } from '../Online';

export interface ICardInfoProps {
  id: string;
  imgUrl: string;
  nickname: string;
  online: boolean;
  lastmessage: string;
  messagetime: boolean;
}

export const CardInfo = ({
  imgUrl,
  nickname,
  online,
  lastmessage,
  messagetime,
  id
}: ICardInfoProps) => {
  return (
    <CardInfStyled>
      <CardPhoto>
        <PhotoProfile imageUrl={imgUrl} />
      </CardPhoto>
      <AlignSection>
        <NickName nickname={nickname} />
        <LastMessege lastmessage={lastmessage} />
        
      </AlignSection>
    </CardInfStyled>
  );
};
