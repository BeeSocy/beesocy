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
import Skeleton from 'react-loading-skeleton';
import { baseURL } from '../../../utils/api';
import {
  profileBannerBaseUrl,
  profileImageBaseUrl
} from '../../../pages/Profile';

interface IContainerProps {
  profile?: IProfile;
  loading?: boolean;
}

export function Container({ profile, loading }: IContainerProps) {
  return (
    <>
      {loading || !profile ? (
        <Skeleton height={200} />
      ) : (
        (profile.bannerFileName || profile.bannerUrl) && (
          <Banner
            bannerUrl={
              profile.bannerUrl ||
              `${profileBannerBaseUrl}${profile.bannerFileName}`
            }
          />
        )
      )}
      <ContentProfile>
        <Content>
          {loading || !profile ? (
            <>
              <Skeleton circle width={100} height={100} />
              <Skeleton width={120} />
              <Skeleton width={80} height={10} />
              <Skeleton width={220} height={40} borderRadius={50} />
              <Skeleton width={220} height={40} borderRadius={50} />
              <Skeleton count={3} height={15} width={220} />
              <Skeleton
                count={5}
                circle
                height={40}
                width={40}
                inline
                style={{ marginInline: 4 }}
              />
              <Skeleton count={3} height={8} width={150} />
            </>
          ) : (
            <>
              <IconProfile
                color={profile.color}
                imageUrl={
                  profile.imageUrl ||
                  `${profileImageBaseUrl}${profile.imageFileName}`
                }
                name={profile.name}
              />
              <TitleName>{profile.name}</TitleName>
              <NameUser>
                <NickName
                  nickname={profile.nickname}
                  verified={profile.verified}
                />
              </NameUser>
              <FollowButton color={profile.color} />
              <SendMessage />
              <InfoProfile
                followers={profile.followers}
                follows={profile.follows}
              />
              <SocialNetworks socialNetworks={profile.socialNetworks} />
              <Description>{profile.description}</Description>
            </>
          )}
        </Content>
      </ContentProfile>
      <ContentCategories color={profile?.color ?? ''} />
    </>
  );
}
