import { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { Container } from './styles';

export interface ILikeButton {
  isLiked?: boolean;
  postId?: number;
}

export function LikeButton({ postId, isLiked }: ILikeButton) {
  const [isLikedState, setIsLikedState] = useState(false);

  function handleLike() {
    //backend
    setIsLikedState(state => !state);
  }

  return (
    <Container
      full={false}
      rounded
      isLiked={isLikedState || isLiked}
      onClick={handleLike}
      aria-label="Curtir"
      title="Curtir"
      aria-checked={isLikedState || isLiked}
    >
      {isLikedState || isLiked ? <MdFavorite /> : <MdFavoriteBorder />}
    </Container>
  );
}
