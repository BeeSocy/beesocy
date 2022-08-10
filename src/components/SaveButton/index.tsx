import { useEffect, useState } from 'react';
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md';

import { Container } from './styles';

export interface ISaveButton {
  isSaved?: boolean;
  postId?: number;
}

export function SaveButton({ postId, isSaved }: ISaveButton) {
  const [isSavedState, setIsSavedState] = useState(false);

  function handleSave() {
    //backend
    setIsSavedState(state => !state);
  }

  useEffect(() => {
    setIsSavedState(isSaved ?? false);
  }, []);

  return (
    <Container
      full={false}
      rounded
      isSaved={isSavedState}
      onClick={handleSave}
      aria-label="Salvar"
      title="Salvar"
      aria-checked={isSavedState}
    >
      {isSavedState ? <MdBookmark /> : <MdBookmarkBorder />}
    </Container>
  );
}
