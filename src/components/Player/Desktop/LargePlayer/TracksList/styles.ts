import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0.8rem;

  overflow-y: auto;

  padding: 0.8rem;
`;

export const Item = styled.div`
  border-top: 0.2rem solid transparent;

  padding-top: 0.8rem;

  /*   &[data-dragging-hover='true'] {
    border-top-color: ${props => props.theme.colors.bee};
  } */

  &[data-dragging-over='true'] {
    border-top-color: ${props => props.theme.colors.bee};
  }
`;
