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

export const music: IMusicPost[] = [
  {
    identification: '88a261d4-09ba-45fe-81cc-ff10c0eb1052',
    name: 'Londres Freestyle',
    artists: ['Veigh', 'Nagalli', 'Supernova Ent'],
    duration: 136,
    imageUrl:
      'https://lh3.googleusercontent.com/Tm4BCNzluBcawAzvLYFxVvTna5wkWxpd-dUpuBjzpNPvaq-T4F1mqnDWUn2d_OMbTPJS27t5EB8YpmUN=w544-h544-l90-rj',

    fileUrl: 'https://audio.jukehost.co.uk/kRgsjbaMBaB7ZDoDm4QZRDuqGx05j8c9',
    description: 'Londres Freestyle',
    explicit: true,
    categories: [],
    usersHasLiked: [],
    usersHasSaved: [],
    usersHasReported: [],
    comments: [],
    createdAt: new Date(2022, 10, 5, 14, 32, 0)
  },
  {
    identification: '3f8f6860-c69e-424b-adc9-2cc7119e4773',
    name: 'Facilitei',
    artists: ['L7NNON', 'Ajax'],
    duration: 212,
    imageUrl:
      'https://lh3.googleusercontent.com/oT8cJ_TwsnTjYsnFM85SUGrQBAy4aX_-SILaIcpCr7yCuMgAFhYUdlv7EB41s1idApyptUT0HUnyoBWV=w60-h60-l90-rj',
    fileUrl: 'https://audio.jukehost.co.uk/yh03xpsgkuEIZ04ogpInYUhvPhYVW5gQ',
    description: 'Facilitei L7',
    explicit: false,
    categories: [],
    usersHasLiked: [],
    usersHasSaved: [],
    usersHasReported: [],
    comments: [],
    createdAt: new Date(2022, 10, 5, 14, 32, 0)
  },
  {
    identification: 'a3565ca0-d375-4cdb-ab20-0d830425de48',
    name: 'Sem pressa',
    artists: [
      'Mc Ryan SP',
      'Caio Passos',
      'DJ Guh Mix',
      'MC GP',
      'MC Kadu',
      'MC Kanhoto'
    ],
    duration: 307,
    imageUrl:
      'https://lh3.googleusercontent.com/jIq8vQe0_Z8j5XmgExJxkqewVrEhKMzrBmJz9jjLCxDxggH5So12rPOMYVIRydqkzp3akA67MhCTcx4=w544-h544-l90-rj',
    fileUrl: 'https://audio.jukehost.co.uk/DXXwxHGjLq2DHh63tPWxj4TwJBSbrFTJ',
    description: 'Sem pressa',
    explicit: true,
    categories: [],
    usersHasLiked: [],
    usersHasSaved: [],
    usersHasReported: [],
    comments: [],
    createdAt: new Date(2022, 10, 5, 14, 32, 0)
  }
];

export const image: IImagePost[] = [
  {
    identification: '943b0dcb-ba69-4374-a525-beb3966e4ed6',
    name: 'Grafitasso',
    description: 'Imagem no estilo grafite',
    img: [
      'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ],
    usersHasLiked: [],
    usersHasSaved: [],
    usersHasReported: [],
    categories: [],
    comments: [],
    createdAt: new Date(2022, 10, 1, 15, 30, 0)
  },
  {
    identification: 'fb248b1a-47fc-43ba-8da1-1c2a3d60b69d',
    name: 'Essa memo',
    description: 'Imagem foda',
    img: [
      'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1631d294-6e9b-4201-a5a8-2c1aa40baed7/dfc7cmz-5b8db738-57cb-4a39-9edc-1d555250ce85.jpg/v1/fit/w_414,h_311,q_70,strp/commission___57_by_lulusama_dfc7cmz-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMTYzMWQyOTQtNmU5Yi00MjAxLWE1YTgtMmMxYWE0MGJhZWQ3XC9kZmM3Y216LTViOGRiNzM4LTU3Y2ItNGEzOS05ZWRjLTFkNTU1MjUwY2U4NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sJcN-we0asGOIcGUXH_anCytwyZTsJgQRnIyOSz1K20'
    ],
    usersHasLiked: [],
    usersHasSaved: [],
    usersHasReported: [],
    categories: [],
    comments: [],
    createdAt: new Date(2022, 10, 1, 15, 30, 0)
  },
  {
    identification: '499b27d2-adcf-4040-9448-39b0020e6f42',
    name: 'Revolução',
    description: 'outra foda',
    img: [
      'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    usersHasLiked: [],
    usersHasSaved: [],
    usersHasReported: [],
    categories: [],
    comments: [],
    createdAt: new Date(2022, 10, 1, 15, 30, 0)
  }
];

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
