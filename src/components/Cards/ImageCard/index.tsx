import { LikeButton } from '../../Widgets/Buttons/ActionButtons/LikeButton';
import { ReportButton } from '../../Widgets/Buttons/ActionButtons/ReportButton';
import { CommentButton } from '../../Widgets/Buttons/ActionButtons/CommentButton';
import { SaveButton } from '../../Widgets/Buttons/ActionButtons/SaveButton';
import { ShareButton } from '../../Widgets/Buttons/ActionButtons/ShareButton';

import { CenterElementContainer, Container, Toolbar } from './styles';
import { HTMLAttributes, ReactNode } from 'react';

export interface IImageCard extends HTMLAttributes<HTMLDivElement> {
  large?: boolean;
  isLiked: boolean;
  isSaved: boolean;
  isReported: boolean;
  description: string;
  img: string;
  centerElement?: ReactNode;
}

export function ImageCard({
  large,
  img,
  description,
  isLiked,
  isSaved,
  isReported,
  centerElement,
  ...props
}: IImageCard) {
  return (
    <Container large={large}>
      <CenterElementContainer>{centerElement}</CenterElementContainer>
      <img src={img} alt={description} {...props} />
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
