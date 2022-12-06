import styled, { css } from 'styled-components';
import { IComponent } from '.';

interface IBodyComponent {
  title: 'code' | 'music' | 'image' | 'profile' | 'best';
}

export const BodyComponent = styled.div<IBodyComponent>`
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  border-radius: 2rem;

  background: linear-gradient(
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 2.8rem;
`;
