import { MdAdd } from 'react-icons/md';
import { user } from '../../../pages/Profile';
import { Content } from './styles';

export function ButtonFollow() {
  return (
    <Content color={user.color}>
      <MdAdd size={20} /> <span> Seguir </span>
    </Content>
  );
}
