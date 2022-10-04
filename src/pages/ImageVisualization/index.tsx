import { useParams } from 'react-router-dom';
import { IImagePost } from '../../types/imagePost';
import { InteractionBar } from '../../components/ImageVisualization/InteractionBar';
import { Description } from '../../components/ImageVisualization/Description';
import { BottomContainer } from './styles';
import { Comments } from '../../components/ImageVisualization/Comments';
import { IProfile } from '../../types/profile';
import { IComment } from '../../types/comment';
import { ImageView } from '../../components/ImageVisualization/ImageView';

export const fetchedPost: IImagePost = {
  identification: 'fb248b1a-47fc-43ba-8da1-1c2a3d60b69d',
  name: 'Revolucionando',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reiciendis corporis voluptatum libero quae iusto perspiciatis maiores iste necessitatibus, dolores, commodi sint, nostrum soluta aspernatur facilis nemo architecto veniam exercitationem!',
  img: [
    'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1631d294-6e9b-4201-a5a8-2c1aa40baed7/dfc7cmz-5b8db738-57cb-4a39-9edc-1d555250ce85.jpg/v1/fit/w_414,h_311,q_70,strp/commission___57_by_lulusama_dfc7cmz-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMTYzMWQyOTQtNmU5Yi00MjAxLWE1YTgtMmMxYWE0MGJhZWQ3XC9kZmM3Y216LTViOGRiNzM4LTU3Y2ItNGEzOS05ZWRjLTFkNTU1MjUwY2U4NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sJcN-we0asGOIcGUXH_anCytwyZTsJgQRnIyOSz1K20',
    'https://wallpaperaccess.com/full/343619.jpg'
  ],
  usersHasLiked: [],
  usersHasSaved: [],
  usersHasReported: [],
  categoriesId: [],
  comments: [],
  createdAt: new Date(2022, 10, 1, 15, 30, 0)
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

      commentedAt: new Date(2022, 9, 3, 17, 18, 0),
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

      commentedAt: new Date(2022, 9, 2, 16, 0, 0),
      commentText:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi soluta quas quos ipsa? Tenetur labore illo quia delectus. Quod facere cum hic magni dolorem blanditiis fuga eius nisi qui. Rerum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor harum placeat dolores velit nisi ad voluptate perspiciatis aliquam doloremque! Aut quos asperiores cumque voluptate saepe in sapiente labore et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam in, dicta minus itaque nulla necessitatibus eum minima consectetur placeat ex numquam corporis esse eos inventore iusto eligendi vero culpa! '
    },
    {
      /* usar a tipagem de usuário */
      identification: 'e6737b-4d13-4725-a000-18d04e3619d9',
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
      identification: '74832ca-1443-440a-a82d-558774b452d4',
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

      commentedAt: new Date(2022, 9, 2, 16, 0, 0),
      commentText:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi soluta quas quos ipsa? Tenetur labore illo quia delectus. Quod facere cum hic magni dolorem blanditiis fuga eius nisi qui. Rerum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor harum placeat dolores velit nisi ad voluptate perspiciatis aliquam doloremque! Aut quos asperiores cumque voluptate saepe in sapiente labore et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam in, dicta minus itaque nulla necessitatibus eum minima consectetur placeat ex numquam corporis esse eos inventore iusto eligendi vero culpa! '
    },
    {
      /* usar a tipagem de usuário */
      identification: 'e673d9b-4d13-4725-a000-18d04e3619d9',
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
      identification: '74832c4a-43-440a-a82d-558774b452d4',
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

      commentedAt: new Date(2022, 9, 2, 16, 0, 0),
      commentText:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi soluta quas quos ipsa? Tenetur labore illo quia delectus. Quod facere cum hic magni dolorem blanditiis fuga eius nisi qui. Rerum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor harum placeat dolores velit nisi ad voluptate perspiciatis aliquam doloremque! Aut quos asperiores cumque voluptate saepe in sapiente labore et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam in, dicta minus itaque nulla necessitatibus eum minima consectetur placeat ex numquam corporis esse eos inventore iusto eligendi vero culpa! '
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
      <ImageView img={fetchedPost.img} name={fetchedPost.name} />
      <InteractionBar />

      <BottomContainer>
        <Comments loggedUser={loggedUser} comments={fetchedComments} />
        <Description post={fetchedPost} />
      </BottomContainer>
    </>
  );
}
