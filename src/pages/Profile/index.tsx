import { ReactSVG } from 'react-svg';
import VerifiedSvg from '../../assets/icons/Verified.svg';
import { Container } from '../../components/Profile/Container';
import { useMobile } from '../../hooks/useMobile';
import { IProfile } from '../../types/profile';

export const user: IProfile = {
  name: 'Pica-Pau',
  follows: [],
  followers: [],
  color: '#000000 ',
  identification: '97a02c78-5800-423d-96e1-1fe1db595442',
  imageUrl:
    'https://64.media.tumblr.com/6ae2a67ce510029caf6219c6a708f501/60b41a809f52a0b4-8c/s400x600/7e89be3c89e7cd3fdf18e7f6ed9b4639ace24cde.pnj',
  bannerUrl: 'https://i.ytimg.com/vi/kvV0pyEv8IY/mqdefault.jpg',
  description:
    'Melhor que cupim, melhor que o mano piveta, melhor que qualquer mandraque que você ja viu, chegou hoje dos Estado Unidos, Picas-Longas.',
  verified: true,
  vip: true
};
export function Profile() {
  const { isMobile } = useMobile();
  return (
    <>
      {/* <ReactSVG src={VerifiedSvg} /> */}
      {/* <img src={user.imageUrl} /> */}
      <Container></Container>
      {!isMobile ? <></> : <></>}
    </>
  );
}
