import { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { useCategory } from '../../../context/CategoryProvider/useCategory';
import { useScroll } from '../../../hooks/useScroll';
import { ICategory } from '../../../types/category';
import { CategoryTab } from '../../General/CategoryTab';

import { FilterClearButton, CategoryContainer } from './styles';

interface ICategoryCarousel {
  data: ICategory[];
}

export function ImageCategoryCarousel({ data }: ICategoryCarousel) {
  const { elementRef: CategoryContainerRef, hasHorizontalScroll } = useScroll();

  const {
    activeCategories,
    handleSetCategoryId,
    handleToggleCategoryActive,
    handleClearCategoriesActive
  } = useCategory();

  const [leftFadeIsActive, setLeftFadeIsActive] = useState<boolean>(false);
  const [rightFadeIsActive, setRightFadeIsActive] = useState<boolean>(true);

  function handleChangeCategoryContainerFade(element: HTMLElement) {
    const scrollIsRightEnd =
      element.offsetWidth + element.scrollLeft >= element.scrollWidth - 8;

    setLeftFadeIsActive(element.scrollLeft >= 0.1);

    if (hasHorizontalScroll) {
      setRightFadeIsActive(!scrollIsRightEnd);
    }
  }

  function handleCategoryContainerAutoScroll(element: HTMLElement) {
    let goScrollBack = false;

    const scrollDistance = 120;
    const scrollChangeTime = 2 * 1000; //2 seconds

    setInterval(() => {
      const scrollIsRightEnd =
        element.offsetWidth + Math.round(element.scrollLeft) ==
        element.scrollWidth;

      if (goScrollBack) {
        element.scrollTo({ left: element.scrollLeft - scrollDistance });
      } else {
        element.scrollTo({ left: element.scrollLeft + scrollDistance });
      }

      if (scrollIsRightEnd) {
        goScrollBack = true;
      }

      if (element.scrollLeft == 0) {
        goScrollBack = false;
      }
    }, scrollChangeTime);
  }

  useEffect(() => {
    if (CategoryContainerRef.current) {
      handleCategoryContainerAutoScroll(CategoryContainerRef.current);
    }

    handleSetCategoryId('image');
  }, []);

  useEffect(() => {
    setRightFadeIsActive(hasHorizontalScroll ?? false);
  }, [hasHorizontalScroll]);

  return (
    <>
      <FilterClearButton
        active={activeCategories.id.length > 0}
        onClick={() => handleClearCategoriesActive('image')}
      >
        <MdClose size={20} />
        <span>Limpar filtros</span>
      </FilterClearButton>

      <CategoryContainer
        leftFadeIsActive={leftFadeIsActive}
        rightFadeIsActive={rightFadeIsActive}
        onScroll={event =>
          handleChangeCategoryContainerFade(event.currentTarget)
        }
        ref={CategoryContainerRef}
      >
        {data.map(category => {
          return (
            <CategoryTab
              key={category.id}
              img={category.img}
              title={category.name}
              onClick={() => {
                handleToggleCategoryActive(category.id, 'image');
                console.log(activeCategories);
              }}
              active={
                activeCategories.type == 'image' &&
                activeCategories.id.includes(category.id)
              }
            />
          );
        })}
      </CategoryContainer>
    </>
  );
}
