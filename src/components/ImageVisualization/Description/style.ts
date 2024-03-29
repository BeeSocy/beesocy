import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};

  border-radius: 2rem;

  padding: 2.8rem 2rem 1.2rem;

  max-width: 40rem;
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;
export const TitleDescription = styled.h1`
  font-size: 2rem;

  margin-bottom: 1.2rem;

  display: -webkit-box;
  display: -moz-box;

  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;

  white-space: normal;

  overflow: hidden;
`;

export const DescriptionContent = styled.span`
  font-size: 1.36rem;

  display: -webkit-box;
  display: -moz-box;

  -webkit-line-clamp: 6;

  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;

  white-space: normal;

  overflow: hidden;
`;
export const Interaction = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;
export const Publish = styled.div`
  display: flex;
  justify-content: center;

  font-size: 1.6rem;

  color: ${props => props.theme.colors.secondaryLight};
`;
