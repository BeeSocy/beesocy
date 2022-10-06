import styled, { css } from 'styled-components';

import { Title } from '../../../General/Title';

export const Container = styled.div`
  width: 100vw;

  background: ${props => props.theme.colors.primary};

  position: fixed;
  z-index: 80;

  right: 0;
  bottom: 6.8rem;

  animation: slideUp 0.5s both;

  @keyframes slideUp {
    from {
      bottom: -90px;
      opacity: 0;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;

  padding: 0.8rem;

  width: 100%;
`;

export const MusicContainer = styled.section`
  display: flex;

  gap: 0.4rem;

  img {
    width: 6rem;
    height: 6rem;

    border-radius: 0.8rem;
  }
`;

export const MusicDetails = styled.section`
  display: flex;

  justify-content: center;

  flex-direction: column;

  position: absolute;

  left: 8rem;
  bottom: 1.4rem;

  gap: 0.4rem;

  span {
    max-width: 18rem;

    white-space: nowrap;

    &:nth-child(2) {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (max-width: 550px) {
      max-width: 8rem;
    }
  }
`;

export const MusicInfo = styled.div`
  display: flex;

  width: 100%;

  gap: 0.2rem;

  align-content: center;
`;

export const StyledTitle = styled(Title)`
  white-space: nowrap;
  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Specs = styled.section`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  width: 40rem;

  margin-left: 2rem;
`;

export const Controls = styled.div`
  display: flex;
  gap: 0.2rem;
`;
