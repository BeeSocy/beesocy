import styled, { css } from 'styled-components';
import { InputTypes } from '.';
import { Button } from '../Buttons/Button';

interface IContainerProps {
  $inputType: InputTypes;
  $active?: boolean;
  $hasContent?: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: ${props => props.theme.colors.secondary};

  ${props =>
    props.$active
      ? css`
          border: 0.2rem solid ${props => props.theme.colors.bee};
        `
      : css`
          border: 0.2rem solid ${props => props.theme.colors.text};
        `}

  border-radius: 0.8rem;

  width: 100%;
  height: 100%;

  position: relative;

  display: flex;

  &:hover,
  & *:hover {
    cursor: text;
  }

  label {
    position: absolute;
    top: 1rem;
    left: 1.2rem;

    color: ${props => props.theme.colors.secondaryLight};

    background: ${props => props.theme.colors.secondary};

    width: calc(100% - 2.2rem);

    user-select: none;

    transition: all 0.3s;

    ${props =>
      props.$active &&
      css`
        color: ${props => props.theme.colors.bee};
        padding-top: 0.4rem;
      `}

    ${props =>
      (props.$hasContent || props.$active) &&
      css`
        font-size: 1.2rem;
        transform: translateY(-1.04rem);
      `}
  }

  input,
  textarea {
    padding: 1.8rem 1.2rem;
    padding-bottom: 0.6rem;

    width: 100%;
    height: 100%;

    border: none;
    outline: none;
    background: none;

    font-size: 1.6rem;
    letter-spacing: 0.05rem;

    resize: none;

    font-family: 'Roboto', 'Segoe UI', 'sans-serif';
  }
`;

export const EyeButton = styled(Button)`
  padding: 0.8rem;
  margin-right: 0.4rem;
`;
