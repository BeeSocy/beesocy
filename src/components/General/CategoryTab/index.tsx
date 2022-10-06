import { HTMLAttributes } from 'react';
import { StyledCategoryTab } from './styles';

export interface ICategoryTabProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  img: string;
  active?: boolean;
}

export function CategoryTab({
  title,
  img,
  active,
  ...props
}: ICategoryTabProps) {
  return (
    <StyledCategoryTab img={img} active={active} {...props}>
      <span>{title}</span>
    </StyledCategoryTab>
  );
}
