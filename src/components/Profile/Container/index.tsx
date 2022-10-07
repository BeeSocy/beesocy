import { SocialNetworks } from '../SocialNetworks';
import { Banner } from '../Banner';
import { FollowButton } from '../FollowButton';
import { ContentCategories } from '../ContentCategories';
import { IconProfile } from '../IconProfile';
import { InfoProfile } from '../InfoProfile';
import { NickName } from '../NickName';
import { SendMessage } from '../SendMessage';
import {
  Content,
  ContentProfile,
  Description,
  NameUser,
  TitleName
} from './styles';
import { IProfile } from '../../../types/profile';

interface IContainerProps {
  profile: IProfile;
}

export function Container({ profile }: IContainerProps) {
  return (
    <>
      <Banner />
      <ContentProfile>
        <Content>
          <IconProfile color={profile.color} />
          <TitleName>{profile.name}</TitleName>
          <NameUser>
            <NickName />
          </NameUser>
          <FollowButton />
          <SendMessage />
        </Content>

        <InfoProfile />

        <SocialNetworks />

        <Description>{profile.description}</Description>
      </ContentProfile>
      <ContentCategories />
    </>
  );
}
