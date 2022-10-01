import { useParams } from 'react-router-dom';
import { IImagePost } from '../../types/imagePost';
import { InteractionBar } from '../../components/ImageVisualization/InteractionBar';
import { Description } from '../../components/ImageVisualization/Description';
import { BottomContainer } from './styles';
import { Comments } from '../../components/ImageVisualization/Comments';
import { IProfile } from '../../types/profile';
import { IComment } from '../../types/comment';

export const fetchedPost: IImagePost = {
  identification: '8c44a7f8-83df-4cdc-9f9c-f78cc3175ba8',
  name: 'Gorilasso Roxo',
  categoriesId: [],
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis odit exercitationem. Ea, mollitia laborum? Mollitia sunt odit numquam nihil, incidunt nostrum. In repellat esse beatae illum eaque, ea eos.',
  img: 'https://images.unsplash.com/photo-1660548312984-8f238a3396d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTYzMTQxOQ&ixlib=rb-1.2.1&q=80&w=1080',
  usersHasLiked: [],
  usersHasReported: [],
  usersHasSaved: [],
  comments: [],
  createdAt: new Date(2022, 9, 13, 13, 32, 0)
};

export function ImageVisualization() {
  const { imageId } = useParams();

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

      commentedAt: new Date(2022, 9, 1, 14, 0, 0),
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

      commentedAt: new Date(2022, 9, 3, 16, 0, 0),
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
    <>
      {/*       <Carousel /> */}
      <InteractionBar />

      <BottomContainer>
        <Comments loggedUser={loggedUser} comments={fetchedComments} />
        <Description post={fetchedPost} />
      </BottomContainer>
    </>
  );
}
