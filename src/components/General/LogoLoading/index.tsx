import { useTheme } from '../../../context/ThemeProvider/useTheme';

import abelhaBrancaSrc from '../../../assets/abelha-branca.gif';
import abelhaPretaSrc from '../../../assets/abelha-preta.gif';
import { Img } from './styles';

export function LogoLoading() {
  const { title } = useTheme();

  return (
    <>
      {title === 'dark' ? (
        <Img src={abelhaPretaSrc} alt="Logotipo escuro" />
      ) : (
        <Img src={abelhaBrancaSrc} alt="Logotipo escuro" />
      )}
    </>
  );
}
