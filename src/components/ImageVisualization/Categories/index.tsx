import { IImagePost } from '../../../types/imagePost';
import { Container, StyledCategoryTab } from './styles';

interface ICategoriesProps {
  post: IImagePost;
}

export function Categories({ post }: ICategoriesProps) {
  return (
    <Container>
      {post.categories.map(category => (
        <StyledCategoryTab
          key={category.identification}
          img={category.img}
          title={category.name}
        />
      ))}
    </Container>
  );
}
