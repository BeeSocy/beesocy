import styled from 'styled-components';

export const distance = 28;

export const ContentProfile = styled.div`
  background: ${props => props.theme.colors.primary};

  position: fixed;

  top: 12rem;
  left: 8rem;

  width: ${distance}rem;
  max-height: 55rem;

  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  justify-content: space-evenly;

  padding-block: 2rem;
  padding-inline: 2rem;

  border-radius: 2rem;

  overflow-y: auto;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
`;

export const TitleName = styled.span`
  font-weight: bold;
  font-size: 2rem;

  max-width: 100%;

  display: -webkit-box;
  display: -moz-box;

  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;

  white-space: normal;

  overflow: hidden;

  text-overflow: ellipsis;

  text-align: center;
`;

export const NameUser = styled.div`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }
`;

export const Description = styled.span`
  font-size: 1.4rem;

  text-align: center;

  display: -webkit-box;
  display: -moz-box;

  -webkit-line-clamp: 4;

  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;

  white-space: normal;

  overflow: hidden;

  text-overflow: ellipsis;

  color: ${props => props.theme.colors.secondaryLight};
`;

/*  */
/*  */
