import * as ToastPrimitive from '@radix-ui/react-toast';
import { MdClose } from 'react-icons/md';
import { useAlert } from '../../../context/AlertProvider/useAlert';
import { Button } from '../../Widgets/Buttons/Button';
import { Title } from '../Title';
import {
  StyledToastRoot,
  StyledToastViewPort,
  StyledToastClose
} from './styles';

export function Alert() {
  const { alert, open, handleSetOpen } = useAlert();

  return (
    <ToastPrimitive.Provider swipeDirection="down" duration={3000}>
      <StyledToastRoot
        defaultOpen={false}
        open={open}
        onOpenChange={handleSetOpen}
      >
        <ToastPrimitive.Title>
          <span>{alert}</span>
        </ToastPrimitive.Title>
        <StyledToastClose>
          <MdClose size={18} />
        </StyledToastClose>
      </StyledToastRoot>

      <StyledToastViewPort />
    </ToastPrimitive.Provider>
  );
}
