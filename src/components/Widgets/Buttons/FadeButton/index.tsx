import { ReactNode, ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpiralLoading } from '../../../General/Loading/Spiral';
import { IButton } from '../Button';
import { Container } from './styles';

interface IFadeButtonProps
  extends IButton,
    ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  to?: string;
  loading?: boolean;
  children: ReactNode;
}

export function FadeButton({
  content,
  to,
  full,
  children,
  loading,
  ...props
}: IFadeButtonProps) {
  const navigate = useNavigate();

  function handleClickButton() {
    if (to) {
      navigate(to, { replace: false });
    }
  }

  return (
    <Container
      content={content}
      full={full}
      onClick={handleClickButton}
      disabled={loading}
      {...props}
    >
      {loading ? <SpiralLoading /> : <>{children}</>}
    </Container>
  );
}
