import { IProfile } from '../../../types/profile';
import { formatNumber } from '../../../utils/formatNumber';
import { Title } from '../../General/Title';
import { Card, Container, Wrapper, ColorBar } from './styles';

interface IArtistCardProps extends IProfile {}

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
          <span>{formatNumber(followers.length)} seguidores</span>
          <ColorBar $color={color} />
        </Wrapper>
      </Card>
    </Container>
  );
}
