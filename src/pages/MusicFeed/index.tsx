import { MusicCard } from '../../components/Cards/MusicCard';
import { Container } from './styles';

export function MusicFeed() {
  return (
    <Container>
      <MusicCard
        name={'Londres Freestyle'}
        artists={['Veigh', 'Nagalli', 'Supernova Ent']}
        duration={0}
        imageUrl={
          'https://lh3.googleusercontent.com/Tm4BCNzluBcawAzvLYFxVvTna5wkWxpd-dUpuBjzpNPvaq-T4F1mqnDWUn2d_OMbTPJS27t5EB8YpmUN=w544-h544-l90-rj'
        }
        fileUrl={'https://voca.ro/1iVr3db8zEgX'}
        id={1}
        description={'Londres Freestyle'}
        explicit
      />
    </Container>
  );
}
