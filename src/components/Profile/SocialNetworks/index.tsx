import { ReactNode } from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaSoundcloud,
  FaTwitter
} from 'react-icons/fa';
import { SocialNetworkButton } from '../../General/SocialNetworkButton';
import { Content } from './styles';

interface ISocialNetworkProps {
  socialNetworks?: [{ description: string; url: string }];
}

export function SocialNetworks({ socialNetworks }: ISocialNetworkProps) {
  function returnIcon(description: string): ReactNode {
    switch (description) {
      case 'facebook':
        return <FaFacebook key={description} size={20} />;
      case 'github':
        return <FaGithub key={description} size={20} />;
      case 'instagram':
        return <FaInstagram key={description} size={20} />;
      case 'spotify':
        return <FaSpotify key={description} size={20} />;
      case 'soundcloud':
        return <FaSoundcloud key={description} size={20} />;
      case 'twitter':
        return <FaTwitter key={description} size={20} />;
    }
  }

  return (
    <Content>
      <>
        {socialNetworks?.map(value => (
          <SocialNetworkButton
            key={value.description}
            href={value.url}
            target={'_blank'}
          >
            {returnIcon(value.description)}
          </SocialNetworkButton>
        ))}
      </>
    </Content>
  );
}
