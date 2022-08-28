import { ArtistCard } from '../../components/Cards/ArtistCard';
import { MusicCard } from '../../components/Cards/MusicCard';
import { Carousel } from '../../components/General/Carousel';
import { TitleWithLine } from '../../components/MusicFeed/TitleWithLine';
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
      data: [
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
      data: [
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
      title: 'Artistas recomendados',
      halfContainer: false,
      largeContent: true,
      data: [
        {
          id: 1,
          name: 'Julio at Gaita',
          color: '#283dea',
          followers: 89350,
          follows: 252,
          imageUrl:
            'https://images.unsplash.com/photo-1660329268855-38348f36d82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTcxNzg1Nw&ixlib=rb-1.2.1&q=80&w=1080'
        }
      ] as IProfile[]
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
                {algorithm.data.map((data: IMusicPost) => {
                  return (
                    <MusicCard
                      key={data.id}
                      id={data.id}
                      name={data.name}
                      artists={data.artists}
                      duration={data.duration}
                      imageUrl={data.imageUrl}
                      fileUrl={data.fileUrl}
                      description={data.description}
                      explicit={data.explicit}
                      large={algorithm.largeContent}
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
