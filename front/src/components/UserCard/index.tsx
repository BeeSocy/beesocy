import { IUser } from '../../types/user';
import { LinkButton } from '../LinkButton';
import { FollowCard } from './styles';

interface IUserCard {
  user: IUser;
}

export function UserCard({ user }: IUserCard) {
  return (
    <LinkButton key={user.id} to={`/profile/${user.id}`}>
      <FollowCard>
        <img alt={`Foto de perfil de ${user.name}`} src={user.img} />
        <span>{user.name}</span>
      </FollowCard>
    </LinkButton>
  );
}
