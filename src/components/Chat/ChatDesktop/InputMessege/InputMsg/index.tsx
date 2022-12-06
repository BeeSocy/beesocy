import React, { InputHTMLAttributes, useState, KeyboardEvent } from 'react';
import { InputStyled } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  onEnter: (taskName: string) => void;
}

export const InputMsg: React.FC<InputProps> = ({ onEnter }: InputProps) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
    }
  };

  return (
    <InputStyled
      type="text"
      placeholder="Envie uma mensagem..."
      value={inputText}
      onChange={e => setInputText(e.target.value)}
      onKeyUp={handleKeyUp}
    />
  );
};
