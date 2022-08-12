import styled, { css, keyframes } from 'styled-components';
import { IReportButton } from '.';

import { Button } from '../../Button';

export const Container = styled(Button)<IReportButton>`
  svg {
    * {
      color: ${props =>
        props.isReported ? props.theme.colors.bee : props.theme.colors.text};
    }
  }
`;
