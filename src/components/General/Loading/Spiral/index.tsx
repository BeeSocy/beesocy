import { HTMLAttributes } from 'react';
import { Container } from './styles';

export function SpiralLoading({ ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <Container {...props} />;
}
