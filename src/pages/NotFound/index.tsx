import { Container, Title } from './styles';

import NotFoundSrc from '../../assets/NotFound.webp';
import { FadeButton } from '../../components/Widgets/Buttons/FadeButton';

export function NotFound() {
  return (
    <Container>
      <img alt="Número 404 representado em colmeia" src={NotFoundSrc} />
      <Title>Parece que não encontramos o que buscava em nossa colmeia.</Title>
      <FadeButton content="Voltar ao início" to="/" full={true}>
        <span>Voltar ao início</span>
      </FadeButton>
    </Container>
  );
}
