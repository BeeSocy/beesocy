import { IconContext } from 'react-icons';
import { CommentButton } from '../../../../components/Widgets/Buttons/ActionButtons/CommentButton';
import { LikeButton } from '../../../../components/Widgets/Buttons/ActionButtons/LikeButton';
import { SaveButton } from '../../../../components/Widgets/Buttons/ActionButtons/SaveButton';
import { ShareButton } from '../../../../components/Widgets/Buttons/ActionButtons/ShareButton';
import { IImagePost } from '../../../../types/imagePost';
import { formatNumber } from '../../../../utils/formatNumber';
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
