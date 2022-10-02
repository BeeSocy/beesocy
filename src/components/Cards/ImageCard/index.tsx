import { LikeButton } from '../../Widgets/Buttons/ActionButtons/LikeButton';
import { ReportButton } from '../../Widgets/Buttons/ActionButtons/ReportButton';
import { CommentButton } from '../../Widgets/Buttons/ActionButtons/CommentButton';
import { SaveButton } from '../../Widgets/Buttons/ActionButtons/SaveButton';
import { ShareButton } from '../../Widgets/Buttons/ActionButtons/ShareButton';

import { CenterElementContainer, Container, Toolbar, Content } from './styles';
import { HTMLAttributes, ReactNode } from 'react';
import { MdBurstMode } from 'react-icons/md';

export interface IImageCard extends HTMLAttributes<HTMLDivElement> {
  large?: boolean;
  isLiked: boolean;
  isSaved: boolean;
  isReported: boolean;
  description: string;
  img: string;
  centerElement?: ReactNode;
  multiple?: boolean;
}

export function ImageCard({
  large,
  img,
  description,
  isLiked,
  isSaved,
  isReported,
  centerElement,
  multiple,
  ...props
}: IImageCard) {
  return (
    <Container large={large}>
      <CenterElementContainer>{centerElement}</CenterElementContainer>

      <Content>
        {multiple && <MdBurstMode size={42} />}
        <img src={img} alt={description} {...props} />
      </Content>

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
