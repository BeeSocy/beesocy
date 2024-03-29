import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState
} from 'react';
import { ImageCard } from '../../components/Cards/ImageCard';
import { ICategory } from '../../types/category';
import { IImagePost } from '../../types/imagePost';

import { Container } from './styles';

import { useNavigate } from 'react-router-dom';
import { ImageCategoryCarousel } from '../../components/ImageFeed/ImageCategoryCarousel';
import { LikeAnimation } from '../../components/General/LikeAnimation';

export const ImageFeed = React.memo(() => {
  const fetchedPosts: IImagePost[] = [
    {
      identification: '943b0dcb-ba69-4374-a525-beb3966e4ed6',
      name: 'Grafitasso',
      description: 'Imagem no estilo grafite',
      img: [
        'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      ],
      usersHasLiked: [],
      usersHasSaved: [],
      usersHasReported: [],
      categories: [],
      comments: [],
      createdAt: new Date(2022, 10, 1, 15, 30, 0)
    },
    {
      identification: 'fb248b1a-47fc-43ba-8da1-1c2a3d60b69d',
      name: 'Essa memo',
      description: 'Imagem foda',
      img: [
        'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1631d294-6e9b-4201-a5a8-2c1aa40baed7/dfc7cmz-5b8db738-57cb-4a39-9edc-1d555250ce85.jpg/v1/fit/w_414,h_311,q_70,strp/commission___57_by_lulusama_dfc7cmz-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMTYzMWQyOTQtNmU5Yi00MjAxLWE1YTgtMmMxYWE0MGJhZWQ3XC9kZmM3Y216LTViOGRiNzM4LTU3Y2ItNGEzOS05ZWRjLTFkNTU1MjUwY2U4NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sJcN-we0asGOIcGUXH_anCytwyZTsJgQRnIyOSz1K20'
      ],
      usersHasLiked: [],
      usersHasSaved: [],
      usersHasReported: [],
      categories: [],
      comments: [],
      createdAt: new Date(2022, 10, 1, 15, 30, 0)
    },
    {
      identification: '499b27d2-adcf-4040-9448-39b0020e6f42',
      name: 'Revolução',
      description: 'outra foda',
      img: [
        'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
      ],
      usersHasLiked: [],
      usersHasSaved: [],
      usersHasReported: [],
      categories: [],
      comments: [],
      createdAt: new Date(2022, 10, 1, 15, 30, 0)
    }
  ];

  const imageCategory: ICategory[] = [
    {
      identification: '0d168030-f4ed-42f7-be44-83b75870bc51',
      name: 'amarelo',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      identification: '6e69e637-3818-4a04-a4d9-720be96b71df',
      name: 'superfície',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      identification: '556944af-d742-40d9-861c-4dd731e72abd',
      name: 'colorido',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      identification: '6f2b4687-bf54-42ae-8c7d-c630103238fc',
      name: 'azul',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      identification: 'b2bb39a2-19ba-4f90-ae0c-103f40c211fb',
      name: 'crítica',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      identification: '2905b382-6739-4631-b3da-080bdbaa1df7',
      name: 'grafite',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      identification: '9e7b3093-3d09-4e6c-8573-6f169f69ff67',
      name: 'nonsense',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const navigate = useNavigate();

  function handleDoubleClick(postId: string) {
    posts.map(post => {
      if (post.identification === postId) {
        if (/* !post.usersHasLiked */ false) {
          //backend like
        }
      }
    });
    setIsAnimationId(postId);
    setTimeout(() => {
      setIsAnimationId('');
    }, 900);
  }

  function handleSingleClick(postId: string) {
    return navigate(`/imagens/publicacao/${postId}`);
  }

  let clickTimeout: ReturnType<typeof setTimeout> = 0;

  function handlePostClick(postId: string) {
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
  const [isAnimationId, setIsAnimationId] = useState<string>();
  const [randomLargePosts] = useState<boolean[]>(handleSetRandomLargePosts());

  return (
    <>
      <ImageCategoryCarousel data={imageCategory} />
      <Container>
        {posts.map((post, index) => {
          return (
            <ImageCard
              key={post.identification}
              description={post.description}
              img={post.img}
              large={randomLargePosts[index]}
              usersHasLiked={post.usersHasLiked}
              usersHasSaved={post.usersHasSaved}
              usersHasReported={post.usersHasSaved}
              onClick={() => handlePostClick(post.identification)}
              centerElement={
                isAnimationId === post.identification && <LikeAnimation />
              }
              multiple={post.img.length > 1}
              name={post.name}
              identification={post.identification}
              comments={post.comments}
              categories={post.categories}
              createdAt={post.createdAt}
            />
          );
        })}
      </Container>
    </>
  );
});
