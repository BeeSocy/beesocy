import { user } from '../../../pages/Profile';
import { Banner } from '../Banner';
import { IconProfile } from '../IconProfile';
import { Wrapper } from './styles';

export function ContainerMobile() {
  return (
    <>
      <Banner />
      <Wrapper>
        <IconProfile color={user.color} />
      </Wrapper>
    </>
  );
}
