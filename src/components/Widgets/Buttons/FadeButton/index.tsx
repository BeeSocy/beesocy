import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { IButton } from '../Button';
import { Container } from './styles';

interface IFadeButtonProps extends IButton {
  content: string;
  to?: string;
  children: ReactNode;
}

export function FadeButton({ content, to, full, children }: IFadeButtonProps) {
  const navigate = useNavigate();

  function handleClickButton() {
    if (to) {
      navigate(to, { replace: false });
    }
  }

  return (
    <Container content={content} full={full} onClick={handleClickButton}>
      {children}
    </Container>
  );
}
