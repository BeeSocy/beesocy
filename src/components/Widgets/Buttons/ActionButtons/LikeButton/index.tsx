import { useEffect, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { Container } from './styles';

export interface ILikeButton {
  isLiked?: boolean;
  postId?: number;
}

export function handleLike(postId?: number) {
  //backend
}

export function LikeButton({ postId, isLiked }: ILikeButton) {
  const [isLikedState, setIsLikedState] = useState(false);

  function handleClickLike() {
    handleLike();
    setIsLikedState(state => !state);
  }

  useEffect(() => {
    setIsLikedState(isLiked ?? false);
  }, []);

  return (
    <Container
      full={false}
      rounded
      isLiked={isLikedState}
      onClick={handleClickLike}
      aria-label="Curtir"
      title="Curtir"
      aria-checked={isLikedState}
    >
      {isLikedState ? <MdFavorite /> : <MdFavoriteBorder />}
    </Container>
  );
}
