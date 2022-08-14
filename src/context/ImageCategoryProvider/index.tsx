import { createContext, useState } from 'react';
import { IImageCategoryContext, IImageCategoryProvider } from './types';

export const ImageCategoryContext = createContext({} as IImageCategoryContext);

export function ImageCategoryProvider({ children }: IImageCategoryProvider) {
  const [activeCategoriesId, setActiveCategoriesId] = useState<number[]>([]);

  function handleToggleCategoryActive(id: number) {
    if (activeCategoriesId.includes(id)) {
      return setActiveCategoriesId(state =>
        state.filter(element => {
          return element != id;
        })
      );
    }
    setActiveCategoriesId(state => [...state, id]);
  }

  function handleClearCategoriesActive() {
    return setActiveCategoriesId([]);
  }

  return (
    <ImageCategoryContext.Provider
      value={{
        activeCategoriesId,
        handleToggleCategoryActive,
        handleClearCategoriesActive
      }}
    >
      {children}
    </ImageCategoryContext.Provider>
  );
}
