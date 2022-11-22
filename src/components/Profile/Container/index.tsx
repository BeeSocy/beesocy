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
      <Banner bannerUrl={profile.bannerUrl ?? ''} />
      <ContentProfile>
        <Content>
          <IconProfile
            color={profile.color}
            imageUrl={profile.imageUrl}
            name={profile.name}
          />
          <TitleName>{profile.name}</TitleName>
          <NameUser>
            <NickName nickname={profile.nickname} verified={profile.verified} />
          </NameUser>
          <FollowButton color={profile.color} />
          <SendMessage />
        </Content>

        <InfoProfile followers={profile.followers} follows={profile.follows} />

        <SocialNetworks socialNetworks={profile.socialNetworks} />

        <Description>{profile.description}</Description>
      </ContentProfile>
      <ContentCategories color={profile.color} />
    </>
  );
}
