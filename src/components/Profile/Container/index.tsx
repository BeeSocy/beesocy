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
import { ContentSocial } from '../../General/ContentSocial';
import { Divider } from '../../General/Divider';
import { SocialNetworkButton } from '../../General/SocialNetworkButton';
import { Banner } from '../Banner';
import { ButtonFollow } from '../ButtonFollow';
import { ContentSocialProfile } from '../ContentSocialProfile';
import { IconProfile } from '../IconProfile';
import { InfoProfile } from '../InforProfile';
import { SendMensagem } from '../SendMensagem';
import {
  Content,
  ContentProfile,
  Description,
  NameUser,
  TitleName
} from './styles';

export function Container() {
  return (
    <>
      <Banner />
      <ContentProfile>
        <Content>
          <IconProfile color={user.color} />
          <TitleName>{user.name}</TitleName>
          <NameUser>
            <span>@minhapika {user.verified && <MdVerified size={20} />}</span>
          </NameUser>
          <ButtonFollow />
          <SendMensagem />
        </Content>
        <InfoProfile />
        <ContentSocial />
        <Description>{user.description}</Description>
      </ContentProfile>
      {/*  */}
      <ContentSocialProfile />
    </>
  );
}
