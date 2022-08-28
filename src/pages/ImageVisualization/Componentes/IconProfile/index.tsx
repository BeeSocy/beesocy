import * as HoverCard from '@radix-ui/react-hover-card';
import { Link } from 'react-router-dom';

import { ReactSVG } from 'react-svg';
import addIcon from '../../../../assets/icons/add.svg';
import sendIcon from '../../../../assets/icons/send.svg';

import {
  CardIconProfile,
  StyledContent,
  Profile,
  Img,
  UserName,
  Actions,
  TopContainer,
  NickName,
  Description,
  DownContainer,
  Following,
  Followers
} from './styles';

/*
  vou usar para quando clicar na foto ir pro profile do amigão
*/
import { fetchedPost } from '../../index';
import { Button } from '../../../../components/Widgets/Buttons/Button';

export function IconProfile() {
  return (
    <HoverCard.Root>
      {/*  */}

      <HoverCard.Trigger asChild>
        {/*
          aqui eu vou pegar o Id dentro de fetched dentro de ImagesVisualization para entrar no perfil
        */}
        <Link to={`/${fetchedPost.id}`}>
          <CardIconProfile>
            <Img
              src="https://images.unsplash.com/photo-1659292482339-4fe111483d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTYzOTA2OA&ixlib=rb-1.2.1&q=80&w=1080"
              alt="NotFound"
            />
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
                <Img
                  src="https://images.unsplash.com/photo-1659292482339-4fe111483d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTYzOTA2OA&ixlib=rb-1.2.1&q=80&w=1080"
                  alt="NotFound"
                />
              </CardIconProfile>
              <UserName>Júlio na Gaita na Gaita</UserName>
              <NickName>@Julio</NickName>
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
          <Description>`${fetchedPost.description}`</Description>
          <DownContainer>
            <Followers>
              <strong>321</strong> seguidores
            </Followers>
            <Following>
              <strong>123</strong> seguindo
            </Following>
          </DownContainer>
          {/* card */}
        </StyledContent>
      </HoverCard.Portal>
      {/*  */}
    </HoverCard.Root>
  );
}
