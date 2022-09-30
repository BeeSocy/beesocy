import { IconContext } from 'react-icons';
import { LikeButton } from '../../../../components/Widgets/Buttons/ActionButtons/LikeButton';
import { Content, NumberValue } from './style';

export function ContentInteraction() {
  return (
    <IconContext.Provider value={{ size: '20' }}>
      <Content>
        <LikeButton />
        <NumberValue>1,0 mil</NumberValue>
      </Content>
      <Content>
        <LikeButton />
        <NumberValue>1,0 mil</NumberValue>
      </Content>
      <Content>
        <LikeButton />
        <NumberValue>1,0 mil</NumberValue>
      </Content>
    </IconContext.Provider>
  );
}
