import { OnlineStyled } from './styles';

interface IOnlineProps {
  online: 'online' | 'ofline';
}

export const Online = ({ online }: IOnlineProps) => {
  return <OnlineStyled> {online} </OnlineStyled>;
};
