import { useContext } from 'react';
import { ImageCategoryContext } from '.';

export function useImageCategory() {
  const context = useContext(ImageCategoryContext);
  return context;
}
