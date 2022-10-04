import { Divisor } from './styles';
interface IDividerProps {
  isColumn?: boolean;
}
export function Divider({ isColumn }: IDividerProps) {
  return <Divisor isColumn={isColumn}></Divisor>;
}
