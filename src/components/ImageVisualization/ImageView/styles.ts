import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;

    max-width: 70vw;
    max-height: 120vh;

    &:hover {
      cursor: zoom-in;
    }
  }
`;

export const Carousel = styled.div``;

export const CarouselContent = styled.section`
  display: flex;

  height: fit-content;

  a {
    margin-inline: 10rem;
  }
`;
