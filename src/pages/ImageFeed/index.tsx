import React, { useEffect, useRef, useState } from 'react';
import { ImageCard } from '../../components/Cards/ImageCard';
import { IImageCategory } from '../../types/imageCategory';
import { IImagePost } from '../../types/imagePost';

import { useScroll } from '../../hooks/useScroll';

import { CategoryContainer, CategoryTab, Container } from './styles';

export const ImageFeed = React.memo(() => {
  const posts: IImagePost[] = [
    {
      id: Math.floor(Math.random() * 99999),
      description: 'Imagem no estilo grafite',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      isLiked: true,
      isSaved: true,
      isReported: false,
      categoriesId: [1, 7]
    },
    {
      id: Math.floor(Math.random() * 99999),
      description: 'Imagem foda',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      isLiked: false,
      isSaved: false,
      isReported: true,
      categoriesId: [2, 5]
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

  const { elementRef: categoryContainerRef, hasHorizontalScroll } = useScroll();

  const [leftFadeIsActive, setLeftFadeIsActive] = useState<boolean>(false);
  const [rightFadeIsActive, setRightFadeIsActive] = useState<boolean>(
    hasHorizontalScroll ?? false
  );

  const CategoryContainerRef = useRef<HTMLDivElement>(null);

  function handleChangeCategoryContainerFade(element: HTMLElement) {
    const scrollIsRightEnd =
      element.offsetWidth + element.scrollLeft >= element.scrollWidth - 8;

    setLeftFadeIsActive(element.scrollLeft >= 0.1);

    setRightFadeIsActive(!scrollIsRightEnd);
  }

  function handleCategoryContainerAutoScroll(element: HTMLElement) {
    let goScrollBack = false;

    const scrollDistance = 120;
    const scrollChangeTime = 2 * 1000; //2 seconds

    setInterval(() => {
      const scrollIsRightEnd =
        element.offsetWidth + Math.round(element.scrollLeft) ==
        element.scrollWidth;

      if (goScrollBack) {
        element.scrollTo({ left: element.scrollLeft - scrollDistance });
      } else {
        element.scrollTo({ left: element.scrollLeft + scrollDistance });
      }

      if (scrollIsRightEnd) {
        goScrollBack = true;
      }

      if (element.scrollLeft == 0) {
        goScrollBack = false;
      }
    }, scrollChangeTime);
  }

  useEffect(() => {
    if (CategoryContainerRef.current) {
      handleCategoryContainerAutoScroll(CategoryContainerRef.current);
    }
  }, []);

  return (
    <>
      <CategoryContainer
        leftFadeIsActive={leftFadeIsActive}
        rightFadeIsActive={rightFadeIsActive}
        onScroll={event =>
          handleChangeCategoryContainerFade(event.currentTarget)
        }
        ref={categoryContainerRef}
      >
        {imageCategory.map(category => {
          return (
            <CategoryTab key={category.id} img={category.img}>
              <span>{category.name}</span>
            </CategoryTab>
          );
        })}
      </CategoryContainer>

      <Container>
        {posts.map(post => {
          return (
            <ImageCard
              key={post.id}
              id={post.id}
              description={post.description}
              img={post.img}
              large={Boolean(Math.floor(Math.random() * 2))}
              isLiked={post.isLiked}
              isSaved={post.isSaved}
              isReported={post.isReported}
              categoriesId={post.categoriesId}
            />
          );
        })}
      </Container>
    </>
  );
});
