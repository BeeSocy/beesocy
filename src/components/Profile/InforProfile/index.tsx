import { user } from '../../../pages/Profile';
import { ContentFollow, Follow } from './styles';

export function InfoProfile() {
  return (
    <ContentFollow>
      <Follow>
        Seguindo: <span>{user.follows.length}</span>
      </Follow>
      <Follow>
        Seguidores: <span>{user.followers.length}</span>
      </Follow>
      <Follow>
        Postagens: <span>0</span>
      </Follow>
      <></>
    </ContentFollow>
  );
}
