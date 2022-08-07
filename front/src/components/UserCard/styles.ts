import styled from 'styled-components';

export const FollowCard = styled.div`
  display: inherit;
  gap: 2.4rem;
  align-items: inherit;
  justify-content: inherit;

  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 100%;
    margin-left: 0.6rem;
  }

  span {
    max-width: 11.2rem;

    overflow: hidden;

    text-overflow: ellipsis;
  }
`;
