import {
  Comment,
  Container,
  InfoProfile,
  PostDate,
  RightContainer,
  UserProfile
} from './style';
import { CardIconProfile } from '../IconProfile/styles';

export type ProfileComment = {
  Comment: string;
};

export function ProfileCard(props: ProfileComment) {
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
        <Comment>{props.Comment}</Comment>
      </RightContainer>
    </Container>
  );
}
