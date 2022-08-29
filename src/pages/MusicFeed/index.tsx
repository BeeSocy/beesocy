import { useEffect } from 'react';
import { ArtistCard } from '../../components/Cards/ArtistCard';
import { MusicCard } from '../../components/Cards/MusicCard';
import { Carousel } from '../../components/General/Carousel';
import { CategoryTab } from '../../components/General/CategoryTab';
import { TitleWithLine } from '../../components/MusicFeed/TitleWithLine';
import { useCategory } from '../../context/CategoryProvider/useCategory';
import { IArtist } from '../../types/artist';
import { ICategory } from '../../types/category';
import { IMusicAlgorithm } from '../../types/musicAlgorithm';
import { IMusicPost } from '../../types/musicPost';
import { IProfile } from '../../types/profile';
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
          id: 1,
          name: 'Londres Freestyle',
          artists: ['Veigh', 'Nagalli', 'Supernova Ent'],
          duration: 136,
          imageUrl:
            'https://lh3.googleusercontent.com/Tm4BCNzluBcawAzvLYFxVvTna5wkWxpd-dUpuBjzpNPvaq-T4F1mqnDWUn2d_OMbTPJS27t5EB8YpmUN=w544-h544-l90-rj',

          fileUrl: 'https://voca.ro/1iVr3db8zEgX',
          description: 'Londres Freestyle',
          explicit: true
        },
        {
          id: 2,
          name: 'Facilitei',
          artists: ['L7NNON', 'Ajax'],
          duration: 212,
          imageUrl:
            'https://lh3.googleusercontent.com/oT8cJ_TwsnTjYsnFM85SUGrQBAy4aX_-SILaIcpCr7yCuMgAFhYUdlv7EB41s1idApyptUT0HUnyoBWV=w60-h60-l90-rj',
          fileUrl: 'https://voca.ro/194RfvTcivXt',
          description: 'Facilitei L7',
          explicit: false
        },
        {
          id: 3,
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
          fileUrl: 'https://voca.ro/1bM9Aan9ksSd',
          description: 'Sem pressa',
          explicit: true
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
          id: 1,
          name: 'Londres Freestyle',
          artists: ['Veigh', 'Nagalli', 'Supernova Ent'],
          duration: 136,
          imageUrl:
            'https://lh3.googleusercontent.com/Tm4BCNzluBcawAzvLYFxVvTna5wkWxpd-dUpuBjzpNPvaq-T4F1mqnDWUn2d_OMbTPJS27t5EB8YpmUN=w544-h544-l90-rj',

          fileUrl: 'https://voca.ro/1iVr3db8zEgX',
          description: 'Londres Freestyle',
          explicit: true
        },
        {
          id: 2,
          name: 'Facilitei',
          artists: ['L7NNON', 'Ajax'],
          duration: 212,
          imageUrl:
            'https://lh3.googleusercontent.com/oT8cJ_TwsnTjYsnFM85SUGrQBAy4aX_-SILaIcpCr7yCuMgAFhYUdlv7EB41s1idApyptUT0HUnyoBWV=w60-h60-l90-rj',
          fileUrl: 'https://voca.ro/194RfvTcivXt',
          description: 'Facilitei L7',
          explicit: false
        },
        {
          id: 3,
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
          fileUrl: 'https://voca.ro/1bM9Aan9ksSd',
          description: 'Sem pressa',
          explicit: true
        },
        {
          id: 4,
          name: 'ye',
          artists: ['Japa'],
          duration: 167,
          imageUrl:
            'https://lh3.googleusercontent.com/iIzdFZnT4bq9RN9Y3UvhGIil8NrJKuIVmkTfB3KvCHrH8Grzv2e2RayIs1_f5hn80TqJK-WA1z2d1j0=w544-h544-l90-rj',
          fileUrl: 'https://voca.ro/1gPDauBkdbX5',
          description: 'ye',
          explicit: true
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
          id: 1,
          name: 'Julio at Gaita',
          color: '#283dea',
          followers: 89350,
          follows: 252,
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
          id: 1,
          img: 'https://lh3.googleusercontent.com/Tm4BCNzluBcawAzvLYFxVvTna5wkWxpd-dUpuBjzpNPvaq-T4F1mqnDWUn2d_OMbTPJS27t5EB8YpmUN=w544-h544-l90-rj',
          name: 'Freestyle '
        },
        {
          id: 2,
          img: 'https://lh3.googleusercontent.com/oT8cJ_TwsnTjYsnFM85SUGrQBAy4aX_-SILaIcpCr7yCuMgAFhYUdlv7EB41s1idApyptUT0HUnyoBWV=w60-h60-l90-rj',
          name: 'Acústico'
        },
        {
          id: 3,
          img: 'https://lh3.googleusercontent.com/jIq8vQe0_Z8j5XmgExJxkqewVrEhKMzrBmJz9jjLCxDxggH5So12rPOMYVIRydqkzp3akA67MhCTcx4=w544-h544-l90-rj',
          name: 'Funk'
        },
        {
          id: 4,
          img: 'https://lh3.googleusercontent.com/iIzdFZnT4bq9RN9Y3UvhGIil8NrJKuIVmkTfB3KvCHrH8Grzv2e2RayIs1_f5hn80TqJK-WA1z2d1j0=w544-h544-l90-rj',
          name: 'Trap'
        }
      ] as ICategory[]
    }
  ];

  const { activeCategories, handleSetCategoryId, handleToggleCategoryActive } =
    useCategory();

  useEffect(() => {
    handleSetCategoryId('music');
  }, []);

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
                      key={track.id}
                      id={track.id}
                      name={track.name}
                      artists={track.artists}
                      duration={track.duration}
                      imageUrl={track.imageUrl}
                      fileUrl={track.fileUrl}
                      description={track.description}
                      explicit={track.explicit}
                      large={algorithm.largeContent}
                    />
                  );
                })}
                {algorithm.artists?.map((artist: IArtist) => {
                  return (
                    <ArtistCard
                      key={artist.id}
                      name={artist.name}
                      followers={artist.followers}
                      color={artist.color}
                      imageUrl={artist.imageUrl}
                    />
                  );
                })}
                {algorithm.categories?.map((category: ICategory) => {
                  return (
                    <CategoryTab
                      key={category.id}
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
