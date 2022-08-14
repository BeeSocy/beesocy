import { ReactNode } from 'react';

interface IImageCategory {
  activeCategoriesId: number[];
}

export interface IImageCategoryContext extends IImageCategory {
  handleToggleCategoryActive(id: number): void;
  handleClearCategoriesActive(): void;
}

export interface IImageCategoryProvider {
  children: ReactNode;
}
