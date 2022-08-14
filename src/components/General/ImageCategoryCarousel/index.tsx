import { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { useImageCategory } from '../../../context/ImageCategoryProvider/useImageCategory';
import { useScroll } from '../../../hooks/useScroll';
import { IImageCategory } from '../../../types/imageCategory';

import { FilterClearButton, CategoryContainer, CategoryTab } from './styles';

interface IImageCategoryCarousel {
  data: IImageCategory[];
}

export function ImageCategoryCarousel({ data }: IImageCategoryCarousel) {
  const { elementRef: CategoryContainerRef, hasHorizontalScroll } = useScroll();

  const {
    activeCategoriesId,
    handleToggleCategoryActive,
    handleClearCategoriesActive
  } = useImageCategory();

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
  }, []);

  useEffect(() => {
    setRightFadeIsActive(hasHorizontalScroll ?? false);
  }, [hasHorizontalScroll]);

  return (
    <>
      <FilterClearButton
        active={activeCategoriesId.length > 0}
        onClick={handleClearCategoriesActive}
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
              onClick={() => {
                handleToggleCategoryActive(category.id);
              }}
              active={activeCategoriesId.includes(category.id)}
            >
              <span>{category.name}</span>
            </CategoryTab>
          );
        })}
      </CategoryContainer>
    </>
  );
}
