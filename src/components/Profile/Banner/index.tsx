import { user } from '../../../pages/Profile';
import { Img } from './styles';

export function Banner() {
  return (
    <>
      <Img src={user.bannerUrl} />
    </>
  );
}
