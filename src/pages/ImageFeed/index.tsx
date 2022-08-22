import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState
} from 'react';
import { ImageCard } from '../../components/Cards/ImageCard';
import { IImageCategory } from '../../types/imageCategory';
import { IImagePost } from '../../types/imagePost';

import { Container } from './styles';

import { useNavigate } from 'react-router-dom';
import { ImageCategoryCarousel } from '../../components/ImageFeed/ImageCategoryCarousel';
import { LikeAnimation } from '../../components/General/LikeAnimation';

export const ImageFeed = React.memo(() => {
  const fetchedPosts: IImagePost[] = [
    {
      id: Math.floor(Math.random() * 99999),
      description: 'Imagem no estilo grafite',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      isLiked: true,
      isSaved: true,
      isReported: false,
      categoriesId: [1, 3, 7]
    },
    {
      id: Math.floor(Math.random() * 99999),
      description: 'Imagem foda',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      isLiked: false,
      isSaved: false,
      isReported: true,
      categoriesId: [2, 3, 5]
    },
    {
      id: Math.floor(Math.random() * 99999),
      description: 'outra foda',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      isLiked: true,
      isSaved: true,
      isReported: true,
      categoriesId: [4, 6]
    }
  ];

  const imageCategory: IImageCategory[] = [
    {
      id: 1,
      name: 'amarelo',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'superfície',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'colorido',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'azul',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'crítica',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'grafite',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      name: 'nonsense',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const navigate = useNavigate();

  function handleDoubleClick(postId: number) {
    posts.map(post => {
      if (post.id === postId) {
        if (!post.isLiked) {
          //backend like
        }
      }
    });
    setIsAnimationId(postId);
    setTimeout(() => {
      setIsAnimationId(0);
    }, 900);
  }

  function handleSingleClick(postId: number) {
    return navigate(`/image/post/${postId}`, { replace: true });
  }

  let clickTimeout: ReturnType<typeof setTimeout> = 0;

  function handlePostClick(postId: number) {
    if (clickTimeout !== 0) {
      //double click action
      handleDoubleClick(postId);
      clearTimeout(clickTimeout);
      clickTimeout = 0;
    } else {
      //single click action
      clickTimeout = setTimeout(() => {
        handleSingleClick(postId);
        clearTimeout(clickTimeout);
        clickTimeout = 0;
      }, 300);
    }
  }

  function handleSetRandomLargePosts(): boolean[] {
    let largePosts: boolean[] = [];
    posts.map((post, index) => {
      largePosts[index] = Boolean(Math.floor(Math.random() * 2));
    });

    return largePosts;
  }

  const [posts, setPosts] = useState<IImagePost[]>(fetchedPosts);
  const [isAnimationId, setIsAnimationId] = useState<number>();
  const [randomLargePosts] = useState<boolean[]>(handleSetRandomLargePosts());

  return (
    <>
      <ImageCategoryCarousel data={imageCategory} />
      <Container>
        {posts.map((post, index) => {
          return (
            <ImageCard
              key={post.id}
              description={post.description}
              img={post.img}
              large={randomLargePosts[index]}
              isLiked={post.isLiked ?? false}
              isSaved={post.isSaved ?? false}
              isReported={post.isReported ?? false}
              onClick={() => handlePostClick(post.id)}
              centerElement={isAnimationId === post.id && <LikeAnimation />}
            />
          );
        })}
      </Container>
    </>
  );
});
