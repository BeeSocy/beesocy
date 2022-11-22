import {
  ContainerFollow,
  ContainerProfile,
  Content,
  ContentProfile,
  ProfileInfo,
  NameProfile,
  TitleName,
  Description
} from './styles';
import { IconProfile } from '../IconProfile';
import { Img } from './styles';
import { SendMessage } from '../SendMessage';
import { FollowButton } from '../FollowButton';
import { InfoProfile } from '../InfoProfile';
import { SocialNetworks } from '../SocialNetworks';
import { NickName } from '../NickName';
import { IProfile } from '../../../types/profile';
import { ContentCategories } from '../ContentCategories';

interface IMobileContainerProps {
  profile: IProfile;
}

export function MobileContainer({ profile }: IMobileContainerProps) {
  return (
    <>
      <Content>
        <ContentProfile>
          <IconProfile
            color={profile.color}
            imageUrl={profile.imageUrl}
            name={profile.name}
          />
        </ContentProfile>
        <Img src={profile.bannerUrl} />
      </Content>

      <ContainerProfile>
        <TitleName color={profile.color}>{profile.name}</TitleName>
      </ContainerProfile>

      <ProfileInfo>
        <NameProfile>
          <NickName nickname={profile.nickname} />
        </NameProfile>

        <ContainerFollow>
          <FollowButton color={profile.color} />
          <SendMessage />
        </ContainerFollow>

        <InfoProfile follows={profile.follows} followers={profile.followers} />

        <SocialNetworks />

        <Description>{profile.description}</Description>
      </ProfileInfo>

      <ContentCategories color={profile.color} />
    </>
  );
}
