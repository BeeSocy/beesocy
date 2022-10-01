import * as HoverCard from '@radix-ui/react-hover-card';
import styled from 'styled-components';
import { breakpoint } from '../../../hooks/useMobile';

export const CardIconProfile = styled.div`
  width: 6rem;
  height: 6rem;

  border-radius: 50%;

  overflow: hidden;

  flex: none;

  img {
    width: 100%;
    height: 100%;

    user-select: none;
    object-fit: cover;
  }

  @media (max-width: ${breakpoint}) {
    width: 4.8rem;
    height: 4.8rem;
  }
`;
export const StyledContent = styled(HoverCard.Content)`
  z-index: 130;

  margin-top: 10rem;

  border: 0.1rem solid ${props => props.theme.colors.light};

  background-color: ${props => props.theme.colors.primary};

  -webkit-box-shadow: 0px 15px 37px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 15px 37px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 15px 37px 3px rgba(0, 0, 0, 0.19);

  border-radius: 2rem;
  padding: 2rem;

  animation: showUp 0.5s;

  @keyframes showUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const UserName = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const NickName = styled.div`
  color: ${props => props.theme.colors.secondaryLight};
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;

  svg,
  svg *,
  button > div {
    width: 4rem;
    height: 4rem;
  }

  button {
    padding: 0.8rem;
    width: fit-content;
    height: fit-content;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const Description = styled.div`
  width: 30rem;
  display: -webkit-box;
  display: -moz-box;

  margin-top: 0.8rem;

  -webkit-line-clamp: 4;

  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;

  white-space: normal;

  overflow: hidden;

  text-overflow: ellipsis;
`;

export const BottomContainer = styled.div`
  margin-top: 2.8rem;

  display: flex;
  justify-content: space-between;

  padding: 0 2rem;
  color: ${props => props.theme.colors.secondaryLight};

  span {
    font-size: 1.4rem;
  }
`;
