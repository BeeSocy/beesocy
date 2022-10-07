import styled, { css } from 'styled-components';

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
          padding: 0.8rem 0;
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
