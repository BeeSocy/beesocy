import { AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';
import { IUser } from '../../../types/user';
import { LinkButton } from '../../Widgets/Buttons/LinkButton';
import { FollowCard } from './styles';

interface IUserCard extends AnchorHTMLAttributes<HTMLAnchorElement> {
  user: IUser;
  full?: boolean;
}

export function UserCard({ user, full }: IUserCard) {
  return (
    <LinkButton key={user.id} to={`/profile/${user.id}`} full={full}>
      <FollowCard>
        <img alt={`Foto de perfil de ${user.name}`} src={user.img} />
        <span>{user.name}</span>
      </FollowCard>
    </LinkButton>
  );
}
