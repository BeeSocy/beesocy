import { useState } from 'react';
import { useProfileCategory } from '../../../context/ProfileCategoryProvider/useProfileCategory';
import { BreadCrump, Content, Header, Margin } from './styles';

interface IContentCategoriesProps {
  color: string;
}

export function ContentCategories({ color }: IContentCategoriesProps) {
  const { activeCategory, handleChangeActive } = useProfileCategory();

  return (
    <Content>
      <Margin>
        <Header>
          <BreadCrump
            color={color}
            onClick={() => {
              handleChangeActive('music');
            }}
            active={activeCategory === 'music'}
          >
            Músicas
          </BreadCrump>

          <BreadCrump
            color={color}
            onClick={() => {
              handleChangeActive('image');
            }}
            active={activeCategory === 'image'}
          >
            Imagens
          </BreadCrump>

          <BreadCrump
            color={color}
            onClick={() => {
              handleChangeActive('code');
            }}
            active={activeCategory === 'code'}
          >
            Códigos
          </BreadCrump>
        </Header>
      </Margin>
    </Content>
  );
}
