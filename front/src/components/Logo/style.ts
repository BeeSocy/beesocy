import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  font-size: 2.8rem;
  font-weight: 700;

  img {
    height: 4.4rem;
    width: 4.4rem;
  }
`;
