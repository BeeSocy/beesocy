import { useState } from 'react';

import { Button } from '../../Widgets/Buttons/Button';
import {
  ButtonSend,
  Comment,
  Container,
  Wrapper,
  ContainerComment,
  InputComment,
  ShowingMoreButton
} from './style';

import { MdOutlineAssignmentReturn, MdSend } from 'react-icons/md';

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
  const [isCommentsShowingMore, setIsCommentsShowingMore] =
    useState<boolean>(false);

  return (
    <Container>
      <Wrapper>
        <Comment>
          <IconProfile user={loggedUser} />

          <ContainerComment htmlFor="inputComment">
            <InputComment
              id="inputComment"
              title="Digite seu comentário"
              type="textarea"
            />
            <ButtonSend full={false} rounded>
              <MdSend size={20} />
            </ButtonSend>
          </ContainerComment>
        </Comment>

        <Divider isColumn={false} />

        {comments.map((value, index) => {
          if (!isCommentsShowingMore && index <= 2) {
            return (
              <CommentCard
                key={value.identification}
                comment={value}
                user={value.user}
              />
            );
          } else if (isCommentsShowingMore) {
            return (
              <CommentCard
                key={value.identification}
                comment={value}
                user={value.user}
              />
            );
          }
        })}

        {comments.length > 3 && (
          <ShowingMoreButton
            full={false}
            onClick={() => setIsCommentsShowingMore(state => !state)}
          >
            Ver {isCommentsShowingMore ? 'menos' : 'mais'}
          </ShowingMoreButton>
        )}
      </Wrapper>
    </Container>
  );
}
