import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  gap: 5px;

  font-size: 2.8rem;
  font-weight: 700;

  img {
    height: 4rem;
    width: 4rem;
  }
`;
