import { Cards } from '../Cards';
import { BodyComponent, Title } from './styles';

export interface IComponent {
  title: 'music' | 'image' | 'profile' | 'best';
  highlight?: boolean;
}
export function Component({ title, highlight }: IComponent) {
  return (
    <BodyComponent title={title}>
      <Title>
        {(title === 'best' && 'Melhores resultados') ||
          (title === 'image' && 'Imagens') ||
          (title === 'music' && 'Músicas') ||
          (title === 'profile' && 'Perfis')}
      </Title>
      <Cards highlight={highlight} title={title} />
    </BodyComponent>
  );
}
