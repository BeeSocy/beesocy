import { MdSend } from 'react-icons/md';
import { Content } from './styles';

export function SendMensagem() {
  return (
    <Content>
      <MdSend size={20} />
      <span>Mensagem</span>
    </Content>
  );
}
