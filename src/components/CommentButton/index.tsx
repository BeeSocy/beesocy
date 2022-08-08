import { useState } from 'react';

import { MdOutlineComment } from 'react-icons/md';

import { Button } from '../Button';

export interface ICommentButton {
  postId?: number;
}

export function CommentButton({ postId }: ICommentButton) {
  function handleComment() {
    //backend
  }

  return (
    <Button
      full={false}
      rounded
      onClick={handleComment}
      aria-label="Comentar"
      title="Comentar"
    >
      <MdOutlineComment />
    </Button>
  );
}
