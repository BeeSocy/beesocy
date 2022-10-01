import { useParams } from 'react-router-dom';
import { IImagePost } from '../../types/imagePost';
import { InteractionBar } from '../../components/ImageVisualization/InteractionBar';
import { Description } from './Componentes/Description';
import { BottomContainer } from './styles';
import { Comments } from '../../components/ImageVisualization/Comments';

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
  createdAt: new Date(2022, 10, 13, 13, 32, 0)
};

export function ImageVisualization() {
  const { imageId } = useParams();

  return (
    <>
      {/*       <Carousel /> */}
      <InteractionBar />

      <BottomContainer>
        <Comments />
        <Description post={fetchedPost} />
      </BottomContainer>
    </>
  );
}
