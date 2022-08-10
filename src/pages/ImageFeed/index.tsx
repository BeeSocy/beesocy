import React, { useState } from 'react';
import { ImageCard } from '../../components/ImageCard';
import { IImageCategory } from '../../types/imageCategory';
import { IImagePost } from '../../types/imagePost';

import { CategoryContainer, CategoryTab, Container } from './styles';

export const ImageFeed = React.memo(() => {
  const posts: IImagePost[] = [
    {
      id: Math.floor(Math.random() * 99999),
      description: 'Imagem no estilo grafite',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      isLiked: true,
      isSaved: true,
      isReported: false
    },
    {
      id: Math.floor(Math.random() * 99999),
      description: 'Imagem foda',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      isLiked: false,
      isSaved: false,
      isReported: true
    },
    {
      id: Math.floor(Math.random() * 99999),
      description: 'outra foda',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      isLiked: true,
      isSaved: true,
      isReported: true
    }
  ];

  const imageCategory: IImageCategory[] = [
    {
      name: 'amarelo',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'superfície',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'colorido',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'azul',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'crítica',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'grafite',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'nonsense',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'amarelo',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'superfície',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'colorido',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'azul',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'crítica',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'grafite',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'nonsense',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'amarelo',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'superfície',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'colorido',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'azul',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'crítica',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'grafite',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'nonsense',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'amarelo',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'superfície',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'colorido',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'azul',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'crítica',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'grafite',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'nonsense',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'amarelo',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'superfície',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'colorido',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'azul',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'crítica',
      img: 'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'grafite',
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'nonsense',
      img: 'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <>
      <CategoryContainer>
        {imageCategory.map(category => {
          return (
            <CategoryTab img={category.img}>
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
            />
          );
        })}
      </Container>
    </>
  );
});
