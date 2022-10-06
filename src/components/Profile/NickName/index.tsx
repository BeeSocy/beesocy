import { MdVerified } from 'react-icons/md';
import { user } from '../../../pages/Profile';

export function NickName() {
  return (
    <span>
      @{user.nickname} {user.verified && <MdVerified size={20} />}
    </span>
  );
}
