import styled, { css } from 'styled-components';
import Sheet from 'react-modal-sheet';
interface IStyledHeaderProps {
  hasTitle?: boolean;
}

export const StyledHeader = styled.section<IStyledHeaderProps>`
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 0.8rem;

  position: relative;

  ${props =>
    props.hasTitle
      ? css`
          border-bottom: 0.1rem solid ${props => props.theme.colors.light};
          padding: 0.8rem;
          margin-bottom: 0.8rem;
        `
      : css`
          & > button[data-dialog-close='true'] {
            top: 0.8rem;
            right: 0.8rem;
            position: absolute;
          }
        `}
`;

interface IStyledSheetProps {
  fullHeight?: boolean;
}

export const StyledSheet = styled(Sheet)<IStyledSheetProps>`
  .react-modal-sheet-container {
    background: ${props => props.theme.colors.primary} !important;
    height: ${props => (props.fullHeight ? '100vh' : 'fit-content')} !important;
  }
`;
