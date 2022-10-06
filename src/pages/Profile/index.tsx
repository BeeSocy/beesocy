import { useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { css } from 'styled-components';
import VerifiedSvg from '../../assets/icons/Verified.svg';
import { Divider } from '../../components/General/Divider';
import { BannerMobile } from '../../components/Profile/CantainerMobile';
import { Container } from '../../components/Profile/Container';
import { ContentSocialProfile } from '../../components/Profile/ContentSocialProfile';
import { useLayout } from '../../context/LayoutProvider/useLayout';
import { useMobile } from '../../hooks/useMobile';
import { IImagePost } from '../../types/imagePost';
import { IMusicPost } from '../../types/musicPost';
import { IProfile } from '../../types/profile';
import { Content, ContentProfile, MarginLeft } from './styles';

export const user: IProfile = {
  nickname: 'pikanagaita',
  name: 'Pica na Gaita',
  follows: [],
  followers: [],
  color: '#8011a1 ',
  identification: '97a02c78-5800-423d-96e1-1fe1db595442',
  imageUrl:
    'https://64.media.tumblr.com/6ae2a67ce510029caf6219c6a708f501/60b41a809f52a0b4-8c/s400x600/7e89be3c89e7cd3fdf18e7f6ed9b4639ace24cde.pnj',
  bannerUrl: 'https://i.ytimg.com/vi/kvV0pyEv8IY/mqdefault.jpg',
  description:
    'Melhor que cupim, melhor que o mano piveta, melhor que qualquer mandrake que você ja viu, chegou hoje dos Estado Unidos, Picas-Longas. Então cuidao casadas, ele também pode voar, segure-se em seu banquinho, e saia de mansinho.',
  verified: true,
  vip: true,
  socialNetworks: {
    instagram: 'https://www.instagram.com/fasneg',
    facebook: 'https://www.facebook.com',
    soundcloud: 'https://soundcloud.com',
    github: 'https://github.com/santosfabin',
    twitter: 'https://twitter.com'
  }
};

export const music: IMusicPost = {
  artists: [],
  categoriesId: [],
  comments: [],
  createdAt: new Date(),
  description: '',
  duration: 5000,
  fileUrl:
    'https://64.media.tumblr.com/6ae2a67ce510029caf6219c6a708f501/60b41a809f52a0b4-8c/s400x600/7e89be3c89e7cd3fdf18e7f6ed9b4639ace24cde.pnj',
  identification:
    'https://64.media.tumblr.com/6ae2a67ce510029caf6219c6a708f501/60b41a809f52a0b4-8c/s400x600/7e89be3c89e7cd3fdf18e7f6ed9b4639ace24cde.pnj',
  imageUrl:
    'https://64.media.tumblr.com/6ae2a67ce510029caf6219c6a708f501/60b41a809f52a0b4-8c/s400x600/7e89be3c89e7cd3fdf18e7f6ed9b4639ace24cde.pnj',
  name: 'name',
  usersHasLiked: [],
  usersHasReported: [],
  usersHasSaved: [],
  explicit: true,
  playlist: true
};

export const image: IImagePost = {
  categoriesId: [],
  comments: [],
  createdAt: new Date(),
  description: '',
  identification: '',
  img: [],
  name: '',
  usersHasLiked: [],
  usersHasReported: [],
  usersHasSaved: []
};

export function Profile() {
  const { isMobile } = useMobile();
  const { handleChangePaddingActive } = useLayout();

  useEffect(() => {
    handleChangePaddingActive(false);
  });

  return (
    <>
      {!isMobile ? <Container /> : <BannerMobile />}

      <Content>
        {!isMobile ? (
          <>
            <MarginLeft />
          </>
        ) : (
          <>
            <ContentSocialProfile />
          </>
        )}

        <ContentProfile>
          Conteudo muitoo pika, além do sistema solar, bem lá, lá longe, peto da
          casa do Gu. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore ex, impedit soluta saepe voluptates pariatur quod.
          Laboriosam, harum veritatis ex ut eos aspernatur itaque in atque
          libero possimus, vitae et?
        </ContentProfile>
      </Content>
    </>
  );
}
