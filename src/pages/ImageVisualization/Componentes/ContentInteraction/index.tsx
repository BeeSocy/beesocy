import { IconContext } from 'react-icons';
import { CommentButton } from '../../../../components/Widgets/Buttons/ActionButtons/CommentButton';
import { LikeButton } from '../../../../components/Widgets/Buttons/ActionButtons/LikeButton';
import { SaveButton } from '../../../../components/Widgets/Buttons/ActionButtons/SaveButton';
import { ShareButton } from '../../../../components/Widgets/Buttons/ActionButtons/ShareButton';
import { Content, NumberValue } from './style';

export function ContentInteraction() {
  return (
    <IconContext.Provider value={{ size: '20' }}>
      <Content>
        <LikeButton />
        <NumberValue>1,0 mil</NumberValue>
      </Content>

      <Content>
        <SaveButton />
        <NumberValue>1,0 mil</NumberValue>
      </Content>

      <Content>
        <CommentButton />
        <NumberValue>1,0 mil</NumberValue>
      </Content>
    </IconContext.Provider>
  );
}
