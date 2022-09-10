import { IMusicPost } from '../../../types/musicPost';
import { MusicCardSmall } from './MusicCardSmall';
import { MusicCardLarge } from './MusicCardLarge';
import { usePlayer } from '../../../context/PlayerProvider/usePlayer';

export const longPressOptions = {
  isPreventDefault: false,
  delay: 800
};

export interface IMusicCardProps extends IMusicPost {
  large?: boolean;
  playing?: boolean;
  showDuration?: boolean;
  clickAction(): void;
}

export function MusicCard(props: IMusicCardProps) {
  const player = usePlayer();

  function handlePlayMusic(track: IMusicPost) {
    player.initPlayer(track);
  }

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
          playing={
            player.getCurrentTrack().fileUrl === props.fileUrl &&
            player.getOpen() &&
            player.getPlaying()
          }
          description={props.description}
          explicit={props.explicit}
          isLiked={props.isLiked}
          isReported={props.isReported}
          isSaved={props.isSaved}
          clickAction={() => {
            handlePlayMusic({
              id: props.id,
              name: props.name,
              artists: props.artists,
              duration: props.duration,
              imageUrl: props.imageUrl,
              fileUrl: props.fileUrl,
              description: props.description,
              explicit: props.explicit,
              isLiked: props.isLiked,
              isReported: props.isReported,
              isSaved: props.isSaved
            });
          }}
        />
      ) : (
        <MusicCardSmall
          name={props.name}
          artists={props.artists}
          duration={props.duration}
          imageUrl={props.imageUrl}
          fileUrl={props.fileUrl}
          id={props.id}
          playing={
            player.getCurrentTrack().fileUrl === props.fileUrl &&
            player.getOpen() &&
            player.getPlaying()
          }
          description={props.description}
          explicit={props.explicit}
          isLiked={props.isLiked}
          isReported={props.isReported}
          isSaved={props.isSaved}
          clickAction={() => {
            handlePlayMusic({
              id: props.id,
              name: props.name,
              artists: props.artists,
              duration: props.duration,
              imageUrl: props.imageUrl,
              fileUrl: props.fileUrl,
              description: props.description,
              explicit: props.explicit,
              isLiked: props.isLiked,
              isReported: props.isReported,
              isSaved: props.isSaved
            });
          }}
        />
      )}
    </>
  );
}
