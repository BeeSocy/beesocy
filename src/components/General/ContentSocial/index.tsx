import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSoundcloud,
  FaTwitter
} from 'react-icons/fa';
import { user } from '../../../pages/Profile';
import { SocialNetworkButton } from '../SocialNetworkButton';
import { Content } from './styles';

export function ContentSocial() {
  return (
    <Content>
      {user.socialNetworks?.twitter && (
        <SocialNetworkButton
          href={user.socialNetworks?.twitter}
          target={'_blank'}
        >
          <FaTwitter size={20} />
        </SocialNetworkButton>
      )}

      {user.socialNetworks?.instagram && (
        <SocialNetworkButton
          href={user.socialNetworks?.instagram}
          target={'_blank'}
        >
          <FaInstagram size={20} />
        </SocialNetworkButton>
      )}

      {user.socialNetworks?.github && (
        <SocialNetworkButton
          href={user.socialNetworks?.github}
          target={'_blank'}
        >
          <FaGithub size={20} />
        </SocialNetworkButton>
      )}

      {user.socialNetworks?.soundcloud && (
        <SocialNetworkButton
          href={user.socialNetworks?.soundcloud}
          target={'_blank'}
        >
          <FaSoundcloud size={20} />
        </SocialNetworkButton>
      )}

      {user.socialNetworks?.facebook && (
        <SocialNetworkButton
          href={user.socialNetworks?.facebook}
          target={'_blank'}
        >
          <FaFacebook size={20} />
        </SocialNetworkButton>
      )}
    </Content>
  );
}
