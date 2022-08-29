import { Button } from '../../../../components/Widgets/Buttons/Button';
import { CardIconProfile } from '../IconProfile/styles';
import {
  ButtonSend,
  Comment,
  Container,
  ContainerChat,
  ContainerComment,
  DescriptionChat,
  Divider,
  InputComment
} from './style';
import { MdSend } from 'react-icons/md';

export function Chat() {
  return (
    <Container>
      <ContainerChat>
        <Comment>
          <CardIconProfile>
            <img
              src="https://images.unsplash.com/photo-1659292482339-4fe111483d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTYzOTA2OA&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Your Profile"
            />
          </CardIconProfile>
          <ContainerComment htmlFor="inputComment">
            <InputComment
              id="inputComment"
              autoComplete="off"
              placeholder="Digite seu comentário"
            />
            <ButtonSend>
              <Button rounded>
                <MdSend size={20} />
              </Button>
            </ButtonSend>
          </ContainerComment>
        </Comment>
        <Divider />
      </ContainerChat>
      <DescriptionChat>asf</DescriptionChat>
    </Container>
  );
}
