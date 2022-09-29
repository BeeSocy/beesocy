import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0.8rem;

  overflow-y: auto;

  padding: 0.8rem;
`;

export const Item = styled.div`
  &[data-dragging='true'] {
    border: 3px solid red;
  }
`;
