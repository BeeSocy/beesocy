import { IImagePost } from '../../types/imagePost';

import { LikeButton } from '../LikeButton';
import { ReportButton } from '../ReportButton';
import { CommentButton } from '../CommentButton';
import { SaveButton } from '../SaveButton';
import { ShareButton } from '../ShareButton';

import { Container, Toolbar } from './styles';

export interface IImageCard extends IImagePost {
  large?: boolean;
}

export function ImageCard({
  large,
  img,
  description,
  isLiked,
  isSaved,
  isReported
}: IImageCard) {
  return (
    <Container large={large}>
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
