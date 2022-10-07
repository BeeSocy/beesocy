import { LikeButton } from '../../Widgets/Buttons/ActionButtons/LikeButton';
import { ReportButton } from '../../Widgets/Buttons/ActionButtons/ReportButton';
import { CommentButton } from '../../Widgets/Buttons/ActionButtons/CommentButton';
import { SaveButton } from '../../Widgets/Buttons/ActionButtons/SaveButton';
import { ShareButton } from '../../Widgets/Buttons/ActionButtons/ShareButton';

import { CenterElementContainer, Container, Toolbar, Content } from './styles';
import { HTMLAttributes, ReactNode, useState } from 'react';
import { MdBurstMode } from 'react-icons/md';
import { IImagePost } from '../../../types/imagePost';

export interface IImageCard extends HTMLAttributes<HTMLDivElement>, IImagePost {
  large?: boolean;
  centerElement?: ReactNode;
  multiple?: boolean;
}

export function ImageCard({
  large,
  img,
  description,
  usersHasLiked,
  usersHasSaved,
  usersHasReported,
  centerElement,
  multiple,
  ...props
}: IImageCard) {
  return (
    <Container large={large}>
      <CenterElementContainer>{centerElement}</CenterElementContainer>

      <Content>
        {multiple && <MdBurstMode size={42} />}
        <img src={img[0]} alt={description} {...props} />
      </Content>

      <Toolbar>
        <SaveButton isSaved={false} />
        <ShareButton />
        <LikeButton isLiked={false} />
        <CommentButton />
        <ReportButton isReported={false} />
      </Toolbar>
    </Container>
  );
}
