import { IImagePost } from '../../../types/imagePost';

import { LikeButton } from '../../Widgets/Buttons/ActionButtons/LikeButton';
import { ReportButton } from '../../Widgets/Buttons/ActionButtons/ReportButton';
import { CommentButton } from '../../Widgets/Buttons/ActionButtons/CommentButton';
import { SaveButton } from '../../Widgets/Buttons/ActionButtons/SaveButton';
import { ShareButton } from '../../Widgets/Buttons/ActionButtons/ShareButton';

import { Container, Toolbar } from './styles';
import { HTMLAttributes } from 'react';

export interface IImageCard extends IImagePost, HTMLAttributes<HTMLDivElement> {
  large?: boolean;
}

export function ImageCard({
  large,
  img,
  description,
  isLiked,
  isSaved,
  isReported,
  ...props
}: IImageCard) {
  return (
    <Container large={large} {...props}>
      <img src={img} alt={description} />
      <Toolbar>
        <SaveButton isSaved={isSaved} />
        <ShareButton />
        <LikeButton isLiked={isLiked} />
        <CommentButton />
        <ReportButton isReported={isReported} />
      </Toolbar>
    </Container>
  );
}
