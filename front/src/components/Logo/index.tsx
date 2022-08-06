import { Container } from './style';

import LogoSrc from '../../assets/logo.webp';

import { LinkProps } from 'react-router-dom';

interface ILogo extends LinkProps {
  titleIsVisible?: boolean;
}

export function Logo({ titleIsVisible = true, ...props }: ILogo) {
  return (
    <Container {...props}>
      <img alt="Logo BeeSocy" src={LogoSrc} />
      {titleIsVisible && <span>BeeSocy</span>}
    </Container>
  );
}
