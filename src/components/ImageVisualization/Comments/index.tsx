import { Button } from '../../Widgets/Buttons/Button';
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

import { CommentCard } from '../CommentCard/index';

import { IProfile } from '../../../types/profile';
import { IComment } from '../../../types/comment';
import { IconProfile } from '../../General/IconProfile';

export function Comments() {
  const fetchedComments: IComment[] = [
    {
      /* usar a tipagem de usuário */
      identification: 'e6737d9b-4d13-4725-a000-18d04e3619d9',
      user: {
        identification: '3d2e6d35-590c-48fc-b78b-bf7ff09ce9c9',
        name: 'Julio',
        nickname: 'juliao43',
        imageUrl:
          'https://images.unsplash.com/photo-1664207251296-569bacae6f04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        follows: [],
        followers: [],
        color: '',
        description:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam numquam quibusdam nesciunt atque odit excepturi fugiat ad at voluptates dignissimos incidunt possimus iste debitis, rerum ex natus necessitatibus exercitationem quisquam? '
      } as IProfile,

      commentedAt: new Date(2022, 9, 30, 14, 2, 30),
      commentText: 'Fala galera'
    },
    {
      /* usar a tipagem de usuário */
      identification: '74832c4a-1443-440a-a82d-558774b452d4',
      user: {
        identification: 'b3977e8c-4ebb-4570-a93b-c048baa74e59',
        name: 'Marcelasso',
        nickname: 'marcelocria254346',
        imageUrl:
          'https://images.unsplash.com/photo-1664498016501-ff1dcd0bb463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        follows: [],
        followers: [],
        color: '',
        description:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam numquam quibusdam nesciunt atque odit excepturi fugiat ad at voluptates dignissimos incidunt possimus iste debitis, rerum ex natus necessitatibus exercitationem quisquam? '
      } as IProfile,

      commentedAt: new Date(2022, 10, 2, 14, 2, 30),
      commentText: 'Legal!'
    }
  ];

  const loggedUser: IProfile = {
    identification: '4c897582-dfcf-4b3e-b6e1-a77321d558d7',
    name: 'Rogério',
    nickname: 'rogeriofps',
    imageUrl:
      'https://images.unsplash.com/photo-1664206626597-2c158e274a96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    follows: [],
    followers: [],
    color: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae nostrum, dicta ullam ut commodi corporis voluptates numquam deserunt atque laboriosam, odit molestiae. Aperiam ipsam consectetur nihil dolore nobis perspiciatis.'
  };

  return (
    <Container>
      <Wrapper>
        <Comment>
          <IconProfile user={loggedUser} />

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

        {fetchedComments.map(value => (
          <CommentCard
            key={value.identification}
            comment={value}
            user={value.user}
          />
        ))}
      </Wrapper>
    </Container>
  );
}
