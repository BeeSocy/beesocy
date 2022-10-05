import styled from 'styled-components';
import { CategoryTab } from '../../General/CategoryTab';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  justify-content: space-around;

  width: 100%;

  gap: 2.8rem;

  background: ${props => props.theme.colors.primary};

  border-radius: 2rem;

  padding: 2.8rem;
`;

export const StyledCategoryTab = styled(CategoryTab)`
  width: 100%;
`;
