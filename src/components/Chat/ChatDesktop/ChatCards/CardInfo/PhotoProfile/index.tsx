import { PhotoProfStyled } from './styles';

interface PhotoProfileProps {
  imageUrl: string;
}
export const PhotoProfile = ({ imageUrl }: PhotoProfileProps) => {
  return <PhotoProfStyled src={imageUrl} />;
};
