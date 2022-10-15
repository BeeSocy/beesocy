import { FixedCropper } from 'react-advanced-cropper';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  padding: 0.8rem;

  gap: 0.8rem;

  button {
    border-radius: 20rem;
    border: 0.1rem solid ${props => props.theme.colors.light};

    justify-content: center;
  }
`;

export const StyledFixedCropper = styled(FixedCropper)`
  &.advanced-cropper {
    max-height: 60vh;
  }
`;
