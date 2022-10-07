import { MdSend } from 'react-icons/md';
import { Content } from './styles';

export function SendMessage() {
  return (
    <Content>
      <MdSend size={20} />
      <span>Mensagem</span>
    </Content>
  );
}
