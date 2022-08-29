import { useContext } from 'react';
import { CategoryContext } from '.';

export function useCategory() {
  const context = useContext(CategoryContext);
  return context;
}
