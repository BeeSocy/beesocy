import styled from 'styled-components';
import dark from '../../../styles/themes/dark';

interface IStyledCategoryTab {
  img: string;
  active?: boolean;
}

export const CategoryTab = styled.div<IStyledCategoryTab>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: fit-content;

  overflow: hidden;

  border-radius: 2rem;

  outline: 3px solid
    ${props =>
      props.active ? props.theme.colors.bee : props.theme.colors.light};

  background: url(${props => props.img}) no-repeat;
  background-size: cover;
  background-position-y: 50%;

  font-weight: 700;

  text-transform: capitalize;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    color: ${props =>
      props.active ? props.theme.colors.bee : dark.colors.text};

    padding: 0.5rem 1.5rem;

    background: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    cursor: pointer;
  }
`;
