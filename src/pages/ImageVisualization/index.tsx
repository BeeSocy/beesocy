import { useParams } from 'react-router-dom';
import { IImagePost } from '../../types/imagePost';
import { InteractionBar } from './Componentes/InteractionBar';
import { Description } from './Componentes/Description';
import { BottomContainer } from './styles';
import { Comments } from './Componentes/Comments';

export const fetchedPost: IImagePost = {
  id: 1651,
  authorId: 111,
  categoriesId: [1, 2, 3],
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis odit exercitationem. Ea, mollitia laborum? Mollitia sunt odit numquam nihil, incidunt nostrum. In repellat esse beatae illum eaque, ea eos.',
  img: 'https://images.unsplash.com/photo-1660548312984-8f238a3396d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTYzMTQxOQ&ixlib=rb-1.2.1&q=80&w=1080',
  isLiked: false,
  isReported: false,
  isSaved: false
};

export function ImageVisualization() {
  const { imageId } = useParams();

  return (
    <>
      {/*       <Carousel /> */}
      <InteractionBar />

      <BottomContainer>
        <Comments />
        <Description />
      </BottomContainer>
    </>
  );
}
