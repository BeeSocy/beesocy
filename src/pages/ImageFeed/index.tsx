import { CommentButton } from '../../components/CommentButton';
import { ImageCard } from '../../components/ImageCard';
import { LikeButton } from '../../components/LikeButton';
import { ReportButton } from '../../components/ReportButton';
import { SaveButton } from '../../components/SaveButton';
import { ShareButton } from '../../components/ShareButton';
import { IImagePost } from '../../types/imagePost';

import { Container } from './styles';

export function ImageFeed() {
  let posts: IImagePost[] = [
    {
      id: Math.floor(Math.random() * 99999),
      description: 'Imagem no estilo grafite',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: Math.floor(Math.random() * 99999),
      description: 'Imagem foda',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: Math.floor(Math.random() * 99999),
      description: 'outra foda',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }
  ];

  for (let i = 0; i <= 10; i++) {
    posts.push(
      {
        id: Math.floor(Math.random() * 99999),
        description: 'Imagem no estilo grafite',
        img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: Math.floor(Math.random() * 99999),
        description: 'Imagem foda',
        img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: Math.floor(Math.random() * 99999),
        description: 'outra foda',
        img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
      }
    );
  }

  return (
    <Container>
      {posts.map(post => {
        return (
          <ImageCard
            key={post.id}
            id={post.id}
            description={post.description}
            img={post.img}
            large={Boolean(Math.floor(Math.random() * 2))}
          />
        );
      })}
    </Container>
  );
}
