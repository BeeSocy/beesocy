import styled from 'styled-components';

export const PhotoHeaderStyled = styled.img`
  height: 4.2rem;
  width: 4.2rem;
  border-radius: 100%;
  transition: filter 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

interface IBoxPhotoProps {
  color: string;
}

export const BoxPhoto = styled.div<IBoxPhotoProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4.6rem;
  width: 4.6rem;
  z-index: 1;

  border: 0.2rem solid ${props => props.color};
  border-radius: 100%;
`;
