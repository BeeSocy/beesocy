import { MusicCard } from '../../components/Cards/MusicCard';
import { Carousel } from '../../components/General/Carousel';
import { TitleWithLine } from '../../components/MusicFeed/TitleWithLine';
import { IMusicAlgorithm } from '../../types/musicAlgorithm';
import { IMusicPost } from '../../types/musicPost';
import { AlgorithmContainer, AlgorithmContent, Container } from './styles';

export function MusicFeed() {
  const fetchedAlgorithms: IMusicAlgorithm[] = [
    {
      title: 'Seus favoritos',
      subtitle: 'Relembre o passado',
      halfContainer: false,
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
        }
      ] as IMusicPost[]
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
              leftArrowPosition={[-6.6, 12]}
              rightArrowPosition={[-6.6, 2.4]}
              key={index + 2}
            >
              <AlgorithmContent key={index + 3}>
                {algorithm.tracks.map(track => {
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
