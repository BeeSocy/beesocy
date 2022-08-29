import { ReactNode } from 'react';

interface ICategory {
  activeCategories: { type: PossibleIds; id: number[] };
}

export type PossibleIds = 'music' | 'image';

export interface ICategoryContext extends ICategory {
  id: PossibleIds;
  handleSetCategoryId(id: PossibleIds): void;
  handleToggleCategoryActive(id: number, type: PossibleIds): void;
  handleClearCategoriesActive(type: PossibleIds): void;
}

export interface ICategoryProvider {
  children: ReactNode;
}
