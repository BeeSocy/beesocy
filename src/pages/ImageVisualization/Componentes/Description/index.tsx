import {
  Container,
  DescriptionContent,
  Interaction,
  Publish,
  TitleDescription
} from './style';
import { fetchedPost } from '../../index';
import { ContentInteraction } from '../ContentInteraction';
export function Description() {
  return (
    <Container>
      <strong>
        <TitleDescription>Banza do Gorila Roxo</TitleDescription>
      </strong>
      <DescriptionContent>{fetchedPost.description}</DescriptionContent>
      <Interaction>
        <ContentInteraction></ContentInteraction>
      </Interaction>
      <Publish>Publicado em: 23 de junho de 2020</Publish>
    </Container>
  );
}
