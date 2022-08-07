import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 80%;

  width: 100%;

  position: relative;

  input {
    width: 100%;
    height: 100%;

    background: none;

    border: 2px solid ${props => props.theme.colors.light};
    border-radius: 0.8rem;

    font-size: 1.6rem;

    position: absolute;
    padding-left: 3.6rem;

    &::placeholder {
      color: ${props => props.theme.colors.light};
    }

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.text};

      + label {
        * {
          color: ${props => props.theme.colors.text};
        }
      }
    }
  }

  label {
    display: flex;
    align-items: center;

    height: 100%;
    padding-inline: 0.56rem;

    * {
      color: ${props => props.theme.colors.light};
    }
  }
`;
