import { useState } from 'react';

import { MdOutlineShare } from 'react-icons/md';

import { Button } from '../Button';

export interface IShareButton {
  postId?: number;
}

export function ShareButton({ postId }: IShareButton) {
  function handleShare() {
    //backend
  }

  return (
    <Button
      full={false}
      rounded
      onClick={handleShare}
      aria-label="Compartilhar"
      title="Compartilhar"
    >
      <MdOutlineShare />
    </Button>
  );
}
