import { CommentButton } from '../../components/CommentButton';
import { LikeButton } from '../../components/LikeButton';
import { ReportButton } from '../../components/ReportButton';
import { SaveButton } from '../../components/SaveButton';
import { ShareButton } from '../../components/ShareButton';

import { Container } from './styles';

export function ImageFeed() {
  return (
    <Container>
      <LikeButton />
      <SaveButton />
      <ShareButton />
      <ReportButton />
      <CommentButton />
    </Container>
  );
}
