import * as HoverCard from '@radix-ui/react-hover-card';
import { Link } from 'react-router-dom';

import { ReactSVG } from 'react-svg';
import addIcon from '../../../assets/icons/Add.svg';
import sendIcon from '../../../assets/icons/send.svg';

import {
  CardIconProfile,
  StyledContent,
  Profile,
  UserName,
  Actions,
  TopContainer,
  NickName,
  Description,
  BottomContainer
} from './styles';

/*
  vou usar para quando clicar na foto ir pro profile do amigão
*/
import { fetchedPost } from '../../../pages/ImageVisualization/index';
import { Button } from '../../Widgets/Buttons/Button';
import { IProfile } from '../../../types/profile';

interface IIconProfileProps {
  user: IProfile;
}

export function IconProfile({ user }: IIconProfileProps) {
  return (
    <HoverCard.Root>
      {/*  */}

      <HoverCard.Trigger asChild>
        {/*
          aqui eu vou pegar o Id dentro de fetched dentro de ImagesVisualization para entrar no perfil
        */}
        <Link to={`/user/${user.identification}}`}>
          <CardIconProfile>
            <img src={user.imageUrl} alt={`Foto de perfil de ${user.name}`} />
          </CardIconProfile>
        </Link>
      </HoverCard.Trigger>

      {/*  */}

      <HoverCard.Portal>
        <StyledContent side="left" sideOffset={20}>
          {/* card */}
          <TopContainer>
            <Profile>
              <CardIconProfile>
                <img
                  src={user.imageUrl}
                  alt={`Foto de perfil de ${user.name}`}
                />
              </CardIconProfile>
              <UserName to={`/profile/${user.identification}`}>
                {user.name}
              </UserName>
              <NickName to={`/profile/${user.identification}`}>
                @{user.nickname}
              </NickName>
              {/*TODO: verificação se é vip */}
            </Profile>
            <Actions>
              <Button rounded>
                <ReactSVG src={addIcon} />
              </Button>
              <Button rounded>
                <ReactSVG src={sendIcon} />
              </Button>
            </Actions>
          </TopContainer>
          <Description>{user.description}</Description>
          <BottomContainer>
            <span>
              <strong>{user.followers ? user.followers.length : 0}</strong>{' '}
              seguidor
              {user.followers && user.followers.length != 1 && 'es'}
              {!user.followers && 'es'}
            </span>
            <span>
              <strong>{user.followers ? user.follows.length : 0}</strong>{' '}
              seguindo
            </span>
          </BottomContainer>
          {/* card */}
        </StyledContent>
      </HoverCard.Portal>
      {/*  */}
    </HoverCard.Root>
  );
}
