import styled from 'styled-components';
import { Button } from '../../Widgets/Buttons/Button';
import { Input } from '../../Widgets/Input';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  background: ${props => props.theme.colors.primary};

  padding: 2.8rem 2rem;

  border-radius: 2rem;
`;
export const Comment = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 2rem;

  height: fit-content;
`;
export const ContainerComment = styled.label`
  width: 100%;
  height: 10rem;

  position: relative;
`;

export const InputComment = styled(Input)`
  width: 100%;
  height: 10rem;
`;
export const ButtonSend = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;

  padding: 0.8rem;

  margin: 0 0.4rem 0.4rem 0;
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background: ${props => props.theme.colors.light};
  margin: 2rem 0;
`;

export const ShowingMoreButton = styled(Button)`
  border-radius: 2rem;
  font-size: 1.6rem;
  font-weight: 700;

  align-self: center;
`;
