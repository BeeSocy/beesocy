import { Button } from '../../Widgets/Buttons/Button';
import {
  ButtonSend,
  Comment,
  Container,
  Wrapper,
  ContainerComment,
  InputComment
} from './style';

import { MdSend } from 'react-icons/md';

import { CommentCard } from '../CommentCard/index';

import { IProfile } from '../../../types/profile';
import { IComment } from '../../../types/comment';
import { IconProfile } from '../../General/IconProfile';

interface ICommentsProps {
  loggedUser: IProfile;
  comments: IComment[];
}

import { Divider } from '../../General/Divider';


export function Comments({ loggedUser, comments }: ICommentsProps) {
  return (
    <Container>
      <Wrapper>
        <Comment>
          <IconProfile user={loggedUser} />

          <ContainerComment htmlFor="inputComment">
            <InputComment
              id="inputComment"
              autoComplete="off"
              placeholder="Digite seu comentário"
            />
            <ButtonSend>
              <Button rounded>
                <MdSend size={20} />
              </Button>
            </ButtonSend>
          </ContainerComment>
        </Comment>

        <Divider isColumn={false} />

        {comments.map(value => (
          <CommentCard
            key={value.identification}
            comment={value}
            user={value.user}
          />
        ))}
      </Wrapper>
    </Container>
  );
}
