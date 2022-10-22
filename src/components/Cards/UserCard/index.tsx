import { AnchorHTMLAttributes } from 'react';
import { IProfile } from '../../../types/profile';
import { LinkButton } from '../../Widgets/Buttons/LinkButton';
import { Container } from './styles';

interface IUserCard extends AnchorHTMLAttributes<HTMLAnchorElement> {
  user: IProfile;
  full?: boolean;
}

export function UserCard({ user, full }: IUserCard) {
  return (
    <LinkButton
      key={user.identification}
      to={`/perfil/${user.identification}`}
      full={full}
    >
      <Container>
        <img alt={`Foto de perfil de ${user.name}`} src={user.imageUrl} />
        <span>{user.name}</span>
      </Container>
    </LinkButton>
  );
}
