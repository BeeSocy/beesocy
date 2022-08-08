import { useState } from 'react';
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md';

import { Container } from './styles';

export interface ISaveButton {
  isSaved?: boolean;
  postId?: number;
}

export function SaveButton({ postId }: ISaveButton) {
  const [isSaved, setIsSaved] = useState(false);

  function handleSave() {
    //backend
    setIsSaved(state => !state);
  }

  return (
    <Container
      full={false}
      rounded
      isSaved={isSaved}
      onClick={handleSave}
      aria-label="Salvar"
      title="Salvar"
      aria-checked={isSaved}
    >
      {isSaved ? <MdBookmark /> : <MdBookmarkBorder />}
    </Container>
  );
}
