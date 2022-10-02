import { useState } from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSoundcloud,
  FaTwitter
} from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { user } from '../../../pages/Profile';
import { SocialNetworkButton } from '../../General/SocialNetworkButton';
import { Divider } from '../../ImageVisualization/Comments/style';
import { Banner } from '../Banner';
import { ButtonFollow } from '../ButtonFollow';
import { IconProfile } from '../IconProfile';
import { SendMensagem } from '../SendMensagem';
import {
  BreadCrump,
  Content,
  ContentFollow,
  ContentProfile,
  ContentSocial,
  Description,
  Follow,
  Header,
  Margin,
  NameUser,
  Pinto,
  TitleName,
  Wrapper
} from './styles';

export function Container() {
  const [breadCrumpActive, setBreadCrumpActive] = useState(0);
  return (
    <>
      <Banner />
      <Wrapper>
        <ContentProfile>
          <Content>
            <IconProfile color={user.color} />
            <TitleName>{user.name}</TitleName>
            <NameUser>
              <span>
                @minhapika {user.verified && <MdVerified size={20} />}
              </span>
            </NameUser>
            <ButtonFollow />
            <SendMensagem />
          </Content>
          <ContentFollow>
            <Follow>
              Seguindo: <span>{user.follows.length}</span>
            </Follow>
            <Follow>
              Seguidores: <span>{user.followers.length}</span>
            </Follow>
            <Follow>
              Postagens: <span>0</span>
            </Follow>
            <></>
          </ContentFollow>
          <Divider />
          <ContentSocial>
            {user.socialNetworks?.twitter && (
              <SocialNetworkButton
                href={user.socialNetworks?.twitter}
                target={'_blank'}
              >
                <FaTwitter />
              </SocialNetworkButton>
            )}

            {user.socialNetworks?.instagram && (
              <SocialNetworkButton
                href={user.socialNetworks?.instagram}
                target={'_blank'}
              >
                <FaInstagram />
              </SocialNetworkButton>
            )}

            {user.socialNetworks?.github && (
              <SocialNetworkButton
                href={user.socialNetworks?.github}
                target={'_blank'}
              >
                <FaGithub />
              </SocialNetworkButton>
            )}

            {user.socialNetworks?.soundcloud && (
              <SocialNetworkButton
                href={user.socialNetworks?.soundcloud}
                target={'_blank'}
              >
                <FaSoundcloud />
              </SocialNetworkButton>
            )}

            {user.socialNetworks?.facebook && (
              <SocialNetworkButton
                href={user.socialNetworks?.facebook}
                target={'_blank'}
              >
                <FaFacebook />
              </SocialNetworkButton>
            )}
          </ContentSocial>
          <Divider />
          <Description>{user.description}</Description>
        </ContentProfile>
      </Wrapper>
      <Pinto>
        <Margin>
          <Header>
            <BreadCrump
              onClick={() => {
                setBreadCrumpActive(0);
              }}
              active={breadCrumpActive === 0}
            >
              Músicas
            </BreadCrump>
            <BreadCrump
              onClick={() => {
                setBreadCrumpActive(1);
              }}
              active={breadCrumpActive === 1}
            >
              Códigos
            </BreadCrump>
            <BreadCrump
              onClick={() => {
                setBreadCrumpActive(2);
              }}
              active={breadCrumpActive === 2}
            >
              Imagens
            </BreadCrump>
          </Header>
        </Margin>
      </Pinto>
    </>
  );
}
