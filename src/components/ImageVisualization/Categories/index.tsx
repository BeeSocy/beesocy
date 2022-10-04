import { IImagePost } from '../../../types/imagePost';
import { CategoryTab } from '../../General/CategoryTab';
import { Container } from './styles';

interface ICategoriesProps {
  post: IImagePost;
}

export function Categories({ post }: ICategoriesProps) {
  return <Container></Container>;
}
