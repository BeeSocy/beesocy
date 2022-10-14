import { createContext, useState } from 'react';
import { IInputs, ISignupContext, ISignupProvider } from './types';

export const SignupContext = createContext({} as ISignupContext);

export function SignupProvider({ children }: ISignupProvider) {
  const [inputsDataState, setInputsDataState] = useState<IInputs>({
    nickname: '',
    username: '',
    email: '',
    password: '',
    profilePicture: '',
    profileBanner: '',
    color: '',
    description: ''
  });

  function handleSetInputsData(inputsData: IInputs): void {
    setInputsDataState({ ...inputsDataState, ...inputsData });
  }

  return (
    <SignupContext.Provider
      value={{ handleSetInputsData, inputsData: inputsDataState }}
    >
      {children}
    </SignupContext.Provider>
  );
}
