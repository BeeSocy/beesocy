import styled from 'styled-components';

import Sheet from 'react-modal-sheet';

export const StyledSheet = styled(Sheet)`
  .react-modal-sheet-container {
    height: fit-content !important;
    background: ${props => props.theme.colors.primary} !important;
  }

  .react-modal-sheet-drag-indicator {
    color: ${props => props.theme.colors.light} !important;
  }
`;
