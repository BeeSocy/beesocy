import { IconContext } from 'react-icons';
import { CommentButton } from '../../Widgets/Buttons/ActionButtons/CommentButton';
import { LikeButton } from '../../Widgets/Buttons/ActionButtons/LikeButton';
import { SaveButton } from '../../Widgets/Buttons/ActionButtons/SaveButton';
import { IImagePost } from '../../../types/imagePost';
import { formatNumber } from '../../../utils/formatNumber';
import { Content, NumberValue } from './style';

interface IContentInteractionProps {
  post: IImagePost;
}

export function ContentInteraction({ post }: IContentInteractionProps) {
  return (
    <IconContext.Provider value={{ size: '20' }}>
      <Content>
        <LikeButton />
        <NumberValue>{formatNumber(post.usersHasLiked.length)}</NumberValue>
      </Content>

      <Content>
        <SaveButton />
        <NumberValue>{formatNumber(post.usersHasSaved.length)}</NumberValue>
      </Content>

      <Content>
        <CommentButton />
        <NumberValue>{formatNumber(post.comments.length)}</NumberValue>
      </Content>
    </IconContext.Provider>
  );
}
