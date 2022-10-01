import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  Container,
  DescriptionContent,
  Interaction,
  Publish,
  TitleDescription
} from './style';
import { fetchedPost } from '../../index';
import { ContentInteraction } from '../ContentInteraction';
import { IImagePost } from '../../../../types/imagePost';

interface IDescriptionProps {
  post: IImagePost;
}

export function Description({ post }: IDescriptionProps) {
  const createdAtDateFormatted = format(
    post.createdAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR
    }
  );

  return (
    <Container>
      <strong>
        <TitleDescription>{post.name}</TitleDescription>
      </strong>
      <DescriptionContent>{fetchedPost.description}</DescriptionContent>
      <Interaction>
        <ContentInteraction post={fetchedPost} />
      </Interaction>
      <Publish>Publicado em: 23 de junho de 2020</Publish>
    </Container>
  );
}
