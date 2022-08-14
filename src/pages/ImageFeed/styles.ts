import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row dense;

  grid-template-columns: repeat(auto-fit, minmax(26.4rem, 1fr));

  justify-items: center;

  gap: 2rem;
`;
