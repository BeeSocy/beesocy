import { useRef, useState } from 'react';
import {
  Comment,
  Container,
  InfoProfile,
  PostDate,
  RightContainer,
  UserProfile,
  ViewMore
} from './style';
import { IComment } from '../../../types/comment';
import { IProfile } from '../../../types/profile';
import { IconProfile } from '../../General/IconProfile';
/* capaz de manipular a DOM */

export type ProfileComment = {
  user: IProfile;
  comment: IComment;
};

export function CommentCard({ user, comment }: ProfileComment) {
  const commentElementRef = useRef<HTMLDivElement>(null);

  const [commentIsViewingMore, setCommentIsViewingMore] = useState(false);

  return (
    <Container>
      <IconProfile user={user} />
      <RightContainer>
        <InfoProfile>
          <UserProfile>{user.name}</UserProfile>
          <PostDate>Há 3 segundos</PostDate>
        </InfoProfile>
        <Comment $active={commentIsViewingMore} ref={commentElementRef}>
          {comment.commentText}
        </Comment>
        {commentElementRef.current &&
          commentElementRef.current?.offsetHeight > 63 && (
            <ViewMore onClick={() => setCommentIsViewingMore(state => !state)}>
              {commentIsViewingMore ? 'Ver menos' : 'Ver mais'}
            </ViewMore>
          )}
      </RightContainer>
    </Container>
  );
}
