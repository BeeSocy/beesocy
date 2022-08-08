import { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { Container } from './styles';

export interface ILikeButton {
  isLiked?: boolean;
  postId?: number;
}

export function LikeButton({ postId }: ILikeButton) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    //backend
    setIsLiked(state => !state);
  }

  return (
    <Container full={false} rounded isLiked={isLiked} onClick={handleLike}>
      {isLiked ? <MdFavorite /> : <MdFavoriteBorder />}
    </Container>
  );
}
