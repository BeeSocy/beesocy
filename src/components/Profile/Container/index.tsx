import { user } from '../../../pages/Profile';
import { Banner } from './styles';

export function Container() {
  return (
    <>
      <Banner src={user.bannerUrl} />
    </>
  );
}
