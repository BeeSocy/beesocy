import { Container } from './style';

import LogoDark from '../../../assets/LogoDark.svg';
import LogoLight from '../../../assets/LogoLight.svg';

import { LinkProps } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeProvider/useTheme';
import { ReactSVG } from 'react-svg';

interface ILogo extends LinkProps {
  titleIsVisible?: boolean;
}

export function Logo({ titleIsVisible = true, ...props }: ILogo) {
  const { title } = useTheme();

  return (
    <Container {...props}>
      <ReactSVG
        alt="Logo BeeSocy"
        src={title === 'dark' ? LogoDark : LogoLight}
      />
      {titleIsVisible && <span>BeeSocy</span>}
    </Container>
  );
}
