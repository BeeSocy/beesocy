import { MdVerified } from 'react-icons/md';

interface INicknameProps {
  nickname: string;
  verified?: boolean;
}

export function NickName({ nickname, verified }: INicknameProps) {
  return (
    <span>
      @{nickname} {verified && <MdVerified size={20} />}
    </span>
  );
}
