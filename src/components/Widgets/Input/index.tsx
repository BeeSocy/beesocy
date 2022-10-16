import { forwardRef, HTMLAttributes, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Container, EyeButton } from './styles';

export type InputTypes = 'text' | 'password' | 'textarea';

interface IInputProps
  extends HTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement | HTMLDivElement
  > {
  title: string;
  type: InputTypes;
}

export function Input({ type, title, ...props }: IInputProps) {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [inputType, setInputType] = useState(type);
  const [isInputHasContent, setIsInputHasContent] = useState<boolean>(false);

  function handleTogglePasswordVisibility() {
    if (isPasswordVisible) {
      setInputType('password');
    } else {
      setInputType('text');
    }

    setIsPasswordVisible(state => !state);
  }

  return (
    <Container
      $active={isInputActive}
      $hasContent={isInputHasContent}
      $inputType={type}
      {...props}
    >
      <label htmlFor={title}>{title}</label>

      {type !== 'textarea' ? (
        <input
          id={title}
          type={inputType}
          onFocusCapture={() => setIsInputActive(true)}
          onBlurCapture={() => setIsInputActive(false)}
          onChangeCapture={event =>
            setIsInputHasContent(event.currentTarget.value.length > 0)
          }
          {...props}
        />
      ) : (
        <textarea
          id={title}
          onFocusCapture={() => setIsInputActive(true)}
          onBlurCapture={() => setIsInputActive(false)}
          onChangeCapture={event =>
            setIsInputHasContent(event.currentTarget.value.length > 0)
          }
          {...props}
        />
      )}

      {type === 'password' && (
        <EyeButton
          type="button"
          full={false}
          rounded
          onClick={handleTogglePasswordVisibility}
        >
          {isPasswordVisible ? (
            <MdVisibilityOff size={20} />
          ) : (
            <MdVisibility size={20} />
          )}
        </EyeButton>
      )}
    </Container>
  );
}
