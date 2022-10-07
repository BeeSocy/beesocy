import { useContext } from 'react';
import { ProfileCategoryContext } from '.';

export function useProfileCategory() {
  const context = useContext(ProfileCategoryContext);
  return context;
}
