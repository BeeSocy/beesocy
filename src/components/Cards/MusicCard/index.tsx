import { IMusicPost } from '../../../types/musicPost';
import { MusicCardSmall } from './MusicCardSmall';
import { MusicCardLarge } from './MusicCardLarge';

export const longPressOptions = {
  isPreventDefault: false,
  delay: 800
};

export interface IMusicCardProps extends IMusicPost {
  large?: boolean;
  playing?: boolean;
  showDuration?: boolean;
}

export function handleMusicCardClick() {
  //play player
}

export function MusicCard(props: IMusicCardProps) {
  return (
    <>
      {props.large ? (
        <MusicCardLarge
          name={props.name}
          artists={props.artists}
          duration={props.duration}
          imageUrl={props.imageUrl}
          fileUrl={props.fileUrl}
          id={props.id}
          description={props.description}
          explicit={props.explicit}
          isLiked={props.isLiked}
          isReported={props.isReported}
          isSaved={props.isSaved}
        />
      ) : (
        <MusicCardSmall
          name={props.name}
          artists={props.artists}
          duration={props.duration}
          imageUrl={props.imageUrl}
          fileUrl={props.fileUrl}
          id={props.id}
          description={props.description}
          explicit={props.explicit}
          isLiked={props.isLiked}
          isReported={props.isReported}
          isSaved={props.isSaved}
        />
      )}
    </>
  );
}
