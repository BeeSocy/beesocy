import { IProfile } from '../../../types/profile';
import { ContentFollow, Follow } from './styles';

interface IInfoProfileProps {
  follows: IProfile[];
  followers: IProfile[];
}

export function InfoProfile({ follows, followers }: IInfoProfileProps) {
  return (
    <ContentFollow>
      <Follow>
        Seguindo: <span>{follows.length}</span>
      </Follow>
      <Follow>
        Seguidores: <span>{followers.length}</span>
      </Follow>
      <Follow>
        Postagens: <span>0</span>
      </Follow>
    </ContentFollow>
  );
}
