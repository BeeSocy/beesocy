import { formatNumber } from '../../../utils/formatNumber';
import { Title } from '../../General/Title';
import { Card, Container, Wrapper, ColorBar } from './styles';

interface IArtistCardProps {
  name: string;
  imageUrl: string;
  followers: number;
  color: string;
}

export function ArtistCard({
  name,
  imageUrl,
  followers,
  color
}: IArtistCardProps) {
  return (
    <Container>
      <Card>
        <Wrapper>
          <img src={imageUrl} />
          <Title size="medium">{name}</Title>
          <span>{formatNumber(followers)} seguidores</span>
          <ColorBar $color={color} />
        </Wrapper>
      </Card>
    </Container>
  );
}
