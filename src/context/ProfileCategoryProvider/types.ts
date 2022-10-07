import { ReactNode } from 'react';

export type ProfileCategories = 'music' | 'code' | 'image';

interface IProfileCategory {
  activeCategory: ProfileCategories;
}

export interface IProfileCategoryContext extends IProfileCategory {
  handleChangeActive(value: ProfileCategories): void;
}

export interface IProfileCategoryProvider {
  children: ReactNode;
}
