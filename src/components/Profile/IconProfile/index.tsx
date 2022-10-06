import { MdStar } from 'react-icons/md';
import { user } from '../../../pages/Profile';
import { Container, Icon, Vip } from './styles';

export interface IIconProfileProps {
  color: string;
}

export function IconProfile(props: IIconProfileProps) {
  return (
    <>
      <Container>
        <Icon color={props.color} src={user.imageUrl} alt={user.name} />
        {user.vip && (
          <Vip color={props.color}>
            <MdStar size={20}></MdStar>
          </Vip>
        )}
      </Container>
    </>
  );
}
