import styled from 'styled-components';

export const CardInfStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  border-radius: inherit;
`;

interface ICardPhotoProps {
  color: string;
}

export const CardPhoto = styled.div<ICardPhotoProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;

  border-radius: 100%;
  border: 0.4rem solid ${props => props.color};
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
