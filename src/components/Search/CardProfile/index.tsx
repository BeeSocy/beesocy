import { useNavigate } from 'react-router-dom';
import { IProfile } from '../../../types/profile';
import { Content, Description, General, Line, Name, Nick } from './styles';

interface ICardProfile {
  profile: IProfile;
  highlight?: boolean;
}

export function CardProfile({ profile, highlight }: ICardProfile) {
  const navigate = useNavigate();
  return (
    <General highlight={highlight} to={`/${profile.nickname}`}>
      <Content>
        <img src={profile.imageUrl} />
        <Name>{profile.name}</Name>
        <Line aria-label="color-line" background={profile.color} />
        <Nick>@{profile.nickname}</Nick>
      </Content>
      {highlight === true && <Description>{profile.description}</Description>}
    </General>
  );
}
