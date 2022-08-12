import styled, { css, keyframes } from 'styled-components';
import { ISaveButton } from '.';

import { Button } from '../../Button';

export const Container = styled(Button)<ISaveButton>`
  svg {
    * {
      color: ${props =>
        props.isSaved ? props.theme.colors.bee : props.theme.colors.text};
    }
  }
`;
