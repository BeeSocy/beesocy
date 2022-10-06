import react, { ReactNode } from 'react';
import { FakeInpStyled } from './styles';
interface IFakeInputProps {
  children: ReactNode;
}
export const FakeInput = ({ children }: IFakeInputProps) => {
  return <FakeInpStyled> {children} </FakeInpStyled>;
};
