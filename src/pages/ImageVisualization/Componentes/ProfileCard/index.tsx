import {
  Comment,
  Container,
  InfoProfile,
  PostDate,
  RightContainer,
  UserProfile,
  ViewMore
} from './style';
import { CardIconProfile } from '../../../../components/General/IconProfile/styles';
import { useRef, useState } from 'react';
/* capaz de manipular a DOM */

export type ProfileComment = {
  comment: string;
};

export function ProfileCard(props: ProfileComment) {
  const commentElementRef = useRef<HTMLDivElement>(null);
  const [commentIsViewingMore, setCommentIsViewingMore] = useState(false);

  return (
    <Container>
      <CardIconProfile>
        <img
          src="https://images.unsplash.com/photo-1659292482339-4fe111483d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTYzOTA2OA&ixlib=rb-1.2.1&q=80&w=1080"
          alt="User Profile"
        />
      </CardIconProfile>
      <RightContainer>
        <InfoProfile>
          <UserProfile>Júlio na Gaita</UserProfile>
          <PostDate>Há 3 segundos</PostDate>
        </InfoProfile>
        <Comment $active={commentIsViewingMore} ref={commentElementRef}>
          {props.Comment}
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
