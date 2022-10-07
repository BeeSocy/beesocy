import { useState } from 'react';
import { useProfileCategory } from '../../../context/ProfileCategoryProvider/useProfileCategory';
import { user } from '../../../pages/Profile';
import { BreadCrump, Content, Header, Margin } from './styles';

export function ContentCategories() {
  const { activeCategory, handleChangeActive } = useProfileCategory();

  return (
    <Content>
      <Margin>
        <Header>
          <BreadCrump
            color={user.color}
            onClick={() => {
              handleChangeActive('music');
            }}
            active={activeCategory === 'music'}
          >
            Músicas
          </BreadCrump>

          <BreadCrump
            color={user.color}
            onClick={() => {
              handleChangeActive('image');
            }}
            active={activeCategory === 'image'}
          >
            Imagens
          </BreadCrump>

          <BreadCrump
            color={user.color}
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
