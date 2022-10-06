import { IImagePost } from '../../../types/imagePost';
import { Container } from './styles';

import { Description } from '../Description';
import { Categories } from '../Categories';

interface IDetailsProps {
  post: IImagePost;
}

export function Details({ post }: IDetailsProps) {
  return (
    <Container>
      <Description post={post} />
      {post.categories.length > 0 && <Categories post={post} />}
    </Container>
  );
}
