import styled from 'styled-components';
import { user } from '../../../../../../pages/Profile';

export const CardInfStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  border-radius: inherit;
`;

export const CardPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;

  border-radius: 100%;
  border: 0.4rem solid ${user.color};
`;

export const LastMesege = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.secondaryLight};
`;

export const AlignSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SectionLineMessage = styled.section`
  display: flex;
  height: auto;
  width: auto;
`;
