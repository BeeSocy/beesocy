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

export function ImageCard({ large, img, description }: IImageCard) {
  /*
  TODO:
  - Like ao dar double click
  - Navegar para a imagem a clicar único
  - Contexto para o like com um estado e uma função de dar like pelo post id
  */

  return (
    <Container large={large}>
      <img src={img} alt={description} />
      <Toolbar>
        <SaveButton />
        <ShareButton />
        <LikeButton />
        <CommentButton />
        <ReportButton />
      </Toolbar>
    </Container>
  );
}
