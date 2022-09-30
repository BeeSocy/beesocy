import { Button } from '../../../../components/Widgets/Buttons/Button';
import { CardIconProfile } from '../../../../components/General/IconProfile/styles';
import {
  ButtonSend,
  Comment,
  Container,
  Wrapper,
  ContainerComment,
  Divider,
  InputComment
} from './style';

import { MdSend } from 'react-icons/md';

import { ProfileCard } from '../ProfileCard/index';

export function Comments() {
  const fetchedComments = [
    {
      /* usar a tipagem de usuário */
      user: 'Júlio',
      userImg:
        'https://images.unsplash.com/photo-1664207251296-569bacae6f04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      commentedAt: new Date(2022, 9, 30, 14, 2, 30),
      comment: 'Fala galera'
    },
    {
      /* usar a tipagem de usuário */
      user: 'Kaique',
      userImg:
        'https://images.unsplash.com/photo-1664207251296-569bacae6f04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      commentedAt: new Date(2022, 10, 2, 14, 3, 30),
      comment: 'Gostei muito'
    }
  ];

  const loggedUser = {
    user: 'Marcelo',
    userImg:
      'https://images.unsplash.com/photo-1664206626597-2c158e274a96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  };

  return (
    <Container>
      <Wrapper>
        <Comment>
          <CardIconProfile>
            <img
              src={loggedUser.userImg}
              alt={`Perfil de ${loggedUser.user}`}
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

        <ProfileCard comment="Muito LEGAL! :)" />
        <ProfileCard comment="Banza leal" />
        <ProfileCard comment="Eu gostei muito dessa foto mas vc é muito ruim KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK" />
        <ProfileCard comment="Lindos" />
        <ProfileCard comment="Vc é feio" />
      </Wrapper>
    </Container>
  );
}
