import { BackButton, Container, Title } from './styles';

import NotFoundSrc from '../../assets/NotFound.webp';

export function NotFound() {
  return (
    <Container>
      <img alt="Número 404 representado em colmeia" src={NotFoundSrc} />
      <Title>Parece que não encontramos o que buscava em nossa colmeia.</Title>
      <BackButton to="/" full>
        Voltar ao início
      </BackButton>
    </Container>
  );
}
