import { Cards } from '../Cards';
import { BodyComponent, Title } from './styles';

export interface IComponent {
  title: 'code' | 'music' | 'image' | 'profile' | 'best';
}
export function Component({ title }: IComponent) {
  return (
    <BodyComponent title={title}>
      <Title>
        {(title === 'best' && 'Melhores') ||
          (title === 'code' && 'Códigos') ||
          (title === 'image' && 'Imagens') ||
          (title === 'music' && 'Músicas') ||
          (title === 'profile' && 'Perfis')}
      </Title>
      <Cards title={title} />
    </BodyComponent>
  );
}
