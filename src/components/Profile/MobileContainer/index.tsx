import {
  ContainerFollow,
  ContainerProfile,
  Content,
  ContentProfile,
  ProfileInfo,
  NameProfile,
  TitleName,
  Description,
  LoadingContainer,
  LoadingButtonContainer,
  LoadingContent
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
import Skeleton from 'react-loading-skeleton';
import { useTheme } from '../../../context/ThemeProvider/useTheme';
import {
  profileBannerBaseUrl,
  profileImageBaseUrl
} from '../../../pages/Profile';

interface IMobileContainerProps {
  profile?: IProfile;
  loading?: boolean;
}

export function MobileContainer({ profile, loading }: IMobileContainerProps) {
  const theme = useTheme();

  return (
    <>
      {loading || !profile ? (
        <LoadingContainer>
          <Skeleton height={120} width="100%" />
          <Skeleton
            width={100}
            height={100}
            circle
            style={{
              position: 'absolute',
              top: 130,
              left: '50%',
              transform: 'translateX(-50%)',
              border: `1rem solid ${theme.colors.secondary}`
            }}
          />
          <Skeleton
            width={120}
            height={20}
            style={{ marginTop: 30, marginBottom: 5 }}
          />
          <Skeleton width={115} height={5} />
          <Skeleton width={110} height={15} style={{ marginBottom: 30 }} />
          <LoadingContent>
            <LoadingButtonContainer>
              <Skeleton width="100%" height={40} borderRadius={50} />
              <Skeleton width="100%" height={40} borderRadius={50} inline />
            </LoadingButtonContainer>
            <Skeleton count={3} height={8} width="100%" />
            <Skeleton
              count={5}
              circle
              height={40}
              width={40}
              inline
              style={{ marginInline: 4, marginBottom: 20 }}
            />
            <br />
            <Skeleton count={3} height={8} width="100%" />
          </LoadingContent>
        </LoadingContainer>
      ) : (
        <>
          <Content>
            <ContentProfile>
              <IconProfile
                color={profile.color}
                imageUrl={
                  profile.imageUrl ||
                  `${profileImageBaseUrl}${profile.imageFileName}`
                }
                name={profile.name}
              />
            </ContentProfile>
            {profile.bannerUrl ||
              (profile.bannerFileName && (
                <Img
                  src={
                    profile.bannerUrl ||
                    `${profileBannerBaseUrl}${profile.bannerFileName}`
                  }
                />
              ))}
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

            <InfoProfile
              follows={profile.follows}
              followers={profile.followers}
            />

            <SocialNetworks socialNetworks={profile.socialNetworks} />

            <Description>{profile.description}</Description>
          </ProfileInfo>
          <ContentCategories color={profile.color} />
        </>
      )}
    </>
  );
}
