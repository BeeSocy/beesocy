import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  Container,
  DescriptionContent,
  Interaction,
  Publish,
  TitleDescription
} from './style';
import { fetchedPost } from '../../../pages/ImageVisualization/index';
import { ContentInteraction } from '../ContentInteraction';
import { IImagePost } from '../../../types/imagePost';

interface IDescriptionProps {
  post: IImagePost;
}

export function Description({ post }: IDescriptionProps) {
  const createdAtDateFormatted = format(
    post.createdAt,
    "d' de 'MMMM' de 'yyyy'",
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
      <Publish>Publicado em: {createdAtDateFormatted}</Publish>
    </Container>
  );
}
