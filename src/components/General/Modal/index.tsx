import { useMobile } from '../../../hooks/useMobile';
import { ModalDesktop } from './ModalDesktop';
import { ModalMobile } from './ModalMobile';

export function Modal() {
  const { isMobile } = useMobile();

  return <>{isMobile ? <ModalMobile /> : <ModalDesktop />}</>;
}
