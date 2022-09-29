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
  clickAction?: () => void;
}

export function MusicCard(props: IMusicCardProps) {
  const player = usePlayer();

  function handlePlayMusic(track: IMusicPost) {
    if (!player.getOpen()) {
      player.initPlayer(track);
    } else {
      player.setCurrentTrack(track);
    }
  }

  function handleClickAction() {
    const currentTrack: IMusicPost = {
      identification: props.identification,
      name: props.name,
      artists: props.artists,
      duration: props.duration,
      imageUrl: props.imageUrl,
      fileUrl: props.fileUrl,
      description: props.description,
      explicit: props.explicit,
      isLiked: props.isLiked,
      isReported: props.isReported,
      isSaved: props.isSaved,
      categoriesId: props.categoriesId
    };

    handlePlayMusic(currentTrack);

    if (
      player
        .getTrackList()
        .filter(value => value.fileUrl === currentTrack.fileUrl).length > 0
    ) {
      player.setPositionOnTrackList(
        player
          .getTrackList()
          .findIndex(value => value.fileUrl === currentTrack.fileUrl) + 1
      );
    } else {
      player.setTrackList([currentTrack]);
    }
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
          identification={props.identification}
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
          categoriesId={props.categoriesId}
          clickAction={handleClickAction}
        />
      ) : (
        <MusicCardSmall
          name={props.name}
          artists={props.artists}
          duration={props.duration}
          imageUrl={props.imageUrl}
          fileUrl={props.fileUrl}
          identification={props.identification}
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
          categoriesId={props.categoriesId}
          clickAction={handleClickAction}
        />
      )}
    </>
  );
}
