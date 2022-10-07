import { MdAdd } from 'react-icons/md';
import { user } from '../../../pages/Profile';
import { Content } from './styles';

export function FollowButton() {
  return (
    <Content color={user.color}>
      <MdAdd size={20} /> <span> Seguir </span>
    </Content>
  );
}
