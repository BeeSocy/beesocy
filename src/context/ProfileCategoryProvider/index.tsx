import { createContext, useState } from 'react';
import {
  IProfileCategoryContext,
  IProfileCategoryProvider,
  ProfileCategories
} from './types';

export const ProfileCategoryContext = createContext(
  {} as IProfileCategoryContext
);

export function ProfileCategoryProvider({
  children
}: IProfileCategoryProvider) {
  const [activeCategory, setActiveCategory] =
    useState<ProfileCategories>('music');

  function handleChangeActive(value: ProfileCategories): void {
    setActiveCategory(value);
  }

  return (
    <ProfileCategoryContext.Provider
      value={{ activeCategory, handleChangeActive }}
    >
      {children}
    </ProfileCategoryContext.Provider>
  );
}
