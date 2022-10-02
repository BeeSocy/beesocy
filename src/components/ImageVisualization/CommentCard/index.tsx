import { useRef, useState } from 'react';
import { format, formatDistanceToNow, intervalToDuration } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Comment,
  Container,
  InfoProfile,
  PostDate,
  RightContainer,
  UserName,
  ViewMore,
  StyledReportButton
} from './styles';

import { IComment } from '../../../types/comment';
import { IProfile } from '../../../types/profile';
import { IconProfile } from '../../General/IconProfile';
import { MdFlag, MdOutlineFlag } from 'react-icons/md';

export type ProfileComment = {
  user: IProfile;
  comment: IComment;
};

export function CommentCard({ user, comment }: ProfileComment) {
  const commentElementRef = useRef<HTMLDivElement>(null);

  const [commentIsViewingMore, setCommentIsViewingMore] = useState(false);

  function formatCommentedAt(date: Date): string {
    const distanceToNow = intervalToDuration({ start: date, end: Date.now() });

    const commentedAtDateFormatted = format(date, "dd'/'MM'/'yyyy'", {
      locale: ptBR
    });

    const distanceToNowFormatted = formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true
    });

    if (distanceToNow.days && distanceToNow.days >= 1) {
      return commentedAtDateFormatted;
    }

    return distanceToNowFormatted;
  }

  return (
    <Container>
      <IconProfile user={user} />
      <RightContainer>
        <InfoProfile>
          <UserName to={`/profile/${user.identification}`}>
            {user.name}
          </UserName>

          <PostDate>{formatCommentedAt(comment.commentedAt)}</PostDate>

          <StyledReportButton full={false} rounded>
            <MdOutlineFlag size={20} />
          </StyledReportButton>
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
