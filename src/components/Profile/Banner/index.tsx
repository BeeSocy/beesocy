import { Img } from './styles';
interface IBannerProps {
  bannerUrl: string;
}

export function Banner({ bannerUrl }: IBannerProps) {
  return <>{bannerUrl && <Img src={bannerUrl} />}</>;
}
