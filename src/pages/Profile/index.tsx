import { useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import VerifiedSvg from '../../assets/icons/Verified.svg';
import { ContainerMobile } from '../../components/Profile/CantainerMobile';
import { Container } from '../../components/Profile/Container';
import { useLayout } from '../../context/LayoutProvider/useLayout';
import { useMobile } from '../../hooks/useMobile';
import { IProfile } from '../../types/profile';

export const user: IProfile = {
  name: 'Picas-Pales',
  follows: [],
  followers: [],
  color: '#ff00c8 ',
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

export function Profile() {
  const { isMobile } = useMobile();
  const { handleChangePaddingActive } = useLayout();

  useEffect(() => {
    handleChangePaddingActive(false);
  });

  return (
    <>
      {/* <ReactSVG src={VerifiedSvg} /> */}
      {/* <img src={user.imageUrl} /> */}

      {!isMobile ? <Container /> : <ContainerMobile />}
    </>
  );
}
