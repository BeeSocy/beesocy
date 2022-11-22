import { MdAdd } from 'react-icons/md';
import { Content } from './styles';

interface IFollowButtonProps {
  color: string;
}

export function FollowButton({ color }: IFollowButtonProps) {
  return (
    <Content color={color}>
      <MdAdd size={20} /> <span> Seguir </span>
    </Content>
  );
}
