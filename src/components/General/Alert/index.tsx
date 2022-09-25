import * as ToastPrimitive from '@radix-ui/react-toast';
import { ReactNode } from 'react';
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

  function returnBoldMessages(message: string): ReactNode {
    const getBoldTexts = message.split('**').filter(value => value !== '');

    if (getBoldTexts.length > 1) {
      return getBoldTexts.map((value, index) => {
        if (value.startsWith(' ') || value.endsWith(' ')) {
          return <span key={index}>{value}</span>;
        }

        return <strong key={index}>{value}</strong>;
      });
    } else {
      return <span>{message}</span>;
    }
  }

  return (
    <ToastPrimitive.Provider swipeDirection="down" duration={3000}>
      <StyledToastRoot
        defaultOpen={false}
        open={open}
        onOpenChange={handleSetOpen}
      >
        <ToastPrimitive.Title>
          <span>{returnBoldMessages(alert)}</span>
        </ToastPrimitive.Title>
        <StyledToastClose>
          <MdClose size={18} />
        </StyledToastClose>
      </StyledToastRoot>

      <StyledToastViewPort />
    </ToastPrimitive.Provider>
  );
}
