import { useEffect } from 'react';
import { ArtistCard } from '../../components/Cards/ArtistCard';
import { MusicCard } from '../../components/Cards/MusicCard';
import { Carousel } from '../../components/General/Carousel';
import { CategoryTab } from '../../components/General/CategoryTab';
import { TitleWithLine } from '../../components/MusicFeed/TitleWithLine';

import { IArtist } from '../../types/artist';
import { ICategory } from '../../types/category';
import { IMusicAlgorithm } from '../../types/musicAlgorithm';
import { IMusicPost } from '../../types/musicPost';

import { AlgorithmContainer, AlgorithmContent, Container } from './styles';

export function MusicFeed() {
  const fetchedAlgorithms: IMusicAlgorithm[] = [
    {
      title: 'Seus favoritos',
      subtitle: 'Relembre o passado',
      halfContainer: false,
      largeContent: true,
      dataType: 'music',
      tracks: [
        {
          identification: 'd1b5a6df-b4b0-4804-bc1b-81c1e5b9bc69',
          name: 'Ghost',
          artists: ['prod.alee'],
          duration: 170,
          imageUrl: 'https://i.imgur.com/vZOnWk8.jpeg',
          fileUrl:
            'https://audio.jukehost.co.uk/0EUSa53LI8BWBLJI4AFnS5Jgl78PjX5j',
          description: 'Ghost',
          explicit: false,
          isLiked: true,
          categories: [],
          usersHasLiked: [],
          usersHasSaved: [],
          usersHasReported: [],
          comments: [],
          createdAt: new Date(2022, 10, 5, 14, 32, 0)
        },
        {
          identification: '88a261d4-09ba-45fe-81cc-ff10c0eb1052',
          name: 'Londres Freestyle',
          artists: ['Veigh', 'Nagalli', 'Supernova Ent'],
          duration: 136,
          imageUrl:
            'https://lh3.googleusercontent.com/Tm4BCNzluBcawAzvLYFxVvTna5wkWxpd-dUpuBjzpNPvaq-T4F1mqnDWUn2d_OMbTPJS27t5EB8YpmUN=w544-h544-l90-rj',

          fileUrl:
            'https://audio.jukehost.co.uk/kRgsjbaMBaB7ZDoDm4QZRDuqGx05j8c9',
          description: 'Londres Freestyle',
          explicit: true,
          isLiked: true,
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
          fileUrl:
            'https://audio.jukehost.co.uk/yh03xpsgkuEIZ04ogpInYUhvPhYVW5gQ',
          description: 'Facilitei L7',
          explicit: false,
          isReported: true,
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
          fileUrl:
            'https://audio.jukehost.co.uk/DXXwxHGjLq2DHh63tPWxj4TwJBSbrFTJ',
          description: 'Sem pressa',
          explicit: true,
          categories: [],
          usersHasLiked: [],
          usersHasSaved: [],
          usersHasReported: [],
          comments: [],
          createdAt: new Date(2022, 10, 5, 14, 32, 0)
        }
      ] as IMusicPost[]
    },
    {
      title: 'Lançamentos',
      subtitle: 'Novidade no seu fone',
      halfContainer: false,
      largeContent: false,
      dataType: 'music',
      tracks: [
        {
          identification: '88a261d4-09ba-45fe-81cc-ff10c0eb1052',
          name: 'Londres Freestyle',
          artists: ['Veigh', 'Nagalli', 'Supernova Ent'],
          duration: 136,
          imageUrl:
            'https://lh3.googleusercontent.com/Tm4BCNzluBcawAzvLYFxVvTna5wkWxpd-dUpuBjzpNPvaq-T4F1mqnDWUn2d_OMbTPJS27t5EB8YpmUN=w544-h544-l90-rj',

          fileUrl:
            'https://audio.jukehost.co.uk/kRgsjbaMBaB7ZDoDm4QZRDuqGx05j8c9',
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
          fileUrl:
            'https://audio.jukehost.co.uk/yh03xpsgkuEIZ04ogpInYUhvPhYVW5gQ',
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
          fileUrl:
            'https://audio.jukehost.co.uk/DXXwxHGjLq2DHh63tPWxj4TwJBSbrFTJ',
          description: 'Sem pressa',
          explicit: true,
          categories: [],
          usersHasLiked: [],
          usersHasSaved: [],
          usersHasReported: [],
          comments: [],
          createdAt: new Date(2022, 10, 5, 14, 32, 0)
        },
        {
          identification: 'd2263cc1-4c70-4628-b84c-cffbc75ae10f',
          name: 'ye',
          artists: ['Japa'],
          duration: 167,
          imageUrl:
            'https://lh3.googleusercontent.com/iIzdFZnT4bq9RN9Y3UvhGIil8NrJKuIVmkTfB3KvCHrH8Grzv2e2RayIs1_f5hn80TqJK-WA1z2d1j0=w544-h544-l90-rj',
          fileUrl:
            'https://audio.jukehost.co.uk/BW8KB0iBaQMWXx478ZLYbWLovkddazD2',
          description: 'ye',
          explicit: true,
          categories: [],
          usersHasLiked: [],
          usersHasSaved: [],
          usersHasReported: [],
          comments: [],
          createdAt: new Date(2022, 10, 5, 14, 32, 0)
        }
      ] as IMusicPost[]
    },
    {
      title: 'Artistas recomendados',
      halfContainer: false,
      largeContent: true,
      dataType: 'artist',
      artists: [
        {
          identification: '',
          nickname: 'juliocomgaita',
          name: 'Julio at Gaita',
          color: '#283dea',
          followers: [],
          follows: [],
          imageUrl:
            'https://images.unsplash.com/photo-1660329268855-38348f36d82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTcxNzg1Nw&ixlib=rb-1.2.1&q=80&w=1080'
        }
      ] as IArtist[]
    },
    {
      title: 'Categorias',
      halfContainer: false,
      largeContent: false,
      dataType: 'category',
      categories: [
        {
          identification: 'f17aeab0-af58-4294-af17-9359ab851648',
          img: 'https://lh3.googleusercontent.com/Tm4BCNzluBcawAzvLYFxVvTna5wkWxpd-dUpuBjzpNPvaq-T4F1mqnDWUn2d_OMbTPJS27t5EB8YpmUN=w544-h544-l90-rj',
          name: 'Freestyle '
        },
        {
          identification: '33b0667a-2c56-4c2c-b0c8-81e051e0bd92',
          img: 'https://lh3.googleusercontent.com/oT8cJ_TwsnTjYsnFM85SUGrQBAy4aX_-SILaIcpCr7yCuMgAFhYUdlv7EB41s1idApyptUT0HUnyoBWV=w60-h60-l90-rj',
          name: 'Acústico'
        },
        {
          identification: '82a20e95-7640-4ced-9a5b-f20803b49843',
          img: 'https://lh3.googleusercontent.com/jIq8vQe0_Z8j5XmgExJxkqewVrEhKMzrBmJz9jjLCxDxggH5So12rPOMYVIRydqkzp3akA67MhCTcx4=w544-h544-l90-rj',
          name: 'Funk'
        },
        {
          identification: '7278cba9-24e2-447e-b053-ed1ec71c7f6e',
          img: 'https://lh3.googleusercontent.com/iIzdFZnT4bq9RN9Y3UvhGIil8NrJKuIVmkTfB3KvCHrH8Grzv2e2RayIs1_f5hn80TqJK-WA1z2d1j0=w544-h544-l90-rj',
          name: 'Trap'
        }
      ] as ICategory[]
    }
  ];

  return (
    <Container>
      {fetchedAlgorithms.map((algorithm, index) => {
        return (
          <AlgorithmContainer key={index}>
            <TitleWithLine key={index + 1} subtitle={algorithm.subtitle}>
              {algorithm.title}
            </TitleWithLine>

            <Carousel
              smooth
              leftArrowPosition={[-6.6, 14]}
              rightArrowPosition={[-6.6, 4.4]}
              key={index + 2}
            >
              <AlgorithmContent
                key={index + 3}
                $multiLines={!algorithm.largeContent}
              >
                {algorithm.tracks?.map((track: IMusicPost) => {
                  return (
                    <MusicCard
                      key={track.identification}
                      identification={track.identification}
                      name={track.name}
                      artists={track.artists}
                      duration={track.duration}
                      imageUrl={track.imageUrl}
                      fileUrl={track.fileUrl}
                      description={track.description}
                      explicit={track.explicit}
                      large={algorithm.largeContent}
                      playlist={track.playlist}
                      usersHasLiked={track.usersHasLiked}
                      usersHasReported={track.usersHasReported}
                      usersHasSaved={track.usersHasSaved}
                      categories={track.categories}
                      comments={track.comments}
                      createdAt={track.createdAt}
                      longPressActive
                    />
                  );
                })}
                {algorithm.artists?.map((artist: IArtist) => {
                  return (
                    <ArtistCard
                      key={artist.identification}
                      name={artist.name}
                      followers={artist.followers}
                      color={artist.color}
                      imageUrl={artist.imageUrl}
                      identification={''}
                      nickname={''}
                      follows={[]}
                    />
                  );
                })}
                {algorithm.categories?.map((category: ICategory) => {
                  return (
                    <CategoryTab
                      key={category.identification}
                      title={category.name}
                      img={category.img}
                    />
                  );
                })}
              </AlgorithmContent>
            </Carousel>
          </AlgorithmContainer>
        );
      })}
    </Container>
  );
}
