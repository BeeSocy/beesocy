import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
export const NumberValue = styled.div`
  color: ${props => props.theme.colors.secondaryLight};
  font-size: 1.6rem;
`;
