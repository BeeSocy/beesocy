import { createContext, useState } from 'react';
import { ICategoryContext, ICategoryProvider, PossibleIds } from './types';

export const CategoryContext = createContext({} as ICategoryContext);

export function CategoryProvider({ children }: ICategoryProvider) {
  const [categoryId, setCategoryId] = useState<PossibleIds>('image');
  const [activeCategories, setActiveCategories] = useState<{
    type: PossibleIds;
    id: string[];
  }>({ type: categoryId, id: [] });

  function handleSetCategoryId(id: PossibleIds) {
    setCategoryId(id);
  }

  function handleToggleCategoryActive(id: string, type: PossibleIds) {
    if (activeCategories.type === type) {
      if (activeCategories.id.includes(id)) {
        return setActiveCategories(state => {
          return {
            type,
            id: state.id.filter(element => {
              return element != id;
            })
          };
        });
      }
      setActiveCategories(state => {
        return {
          type,
          id: [...state.id, id]
        };
      });
    }
  }

  function handleClearCategoriesActive(type: PossibleIds) {
    return setActiveCategories({ type, id: [] });
  }

  return (
    <CategoryContext.Provider
      value={{
        id: categoryId,
        activeCategories,
        handleSetCategoryId,
        handleToggleCategoryActive,
        handleClearCategoriesActive
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
