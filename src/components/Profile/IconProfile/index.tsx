import { MdStar } from 'react-icons/md';
import { Container, Icon, Vip } from './styles';

export interface IIconProfileProps {
  color: string;
  imageUrl?: string;
  imageFileName?: string;
  vip?: boolean;
  name: string;
}

export function IconProfile(props: IIconProfileProps) {
  return (
    <>
      <Container color={props.color}>
        <Icon src={props.imageUrl} alt={`Foto de perfil de ${props.name}`} />
        {props.vip && (
          <Vip color={props.color}>
            <MdStar size={20}></MdStar>
          </Vip>
        )}
      </Container>
    </>
  );
}
