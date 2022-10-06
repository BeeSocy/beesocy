import { IMusicPost } from '../../../types/musicPost';
import { MusicCardSmall } from './MusicCardSmall';
import { MusicCardLarge } from './MusicCardLarge';
import { usePlayer } from '../../../context/PlayerProvider/usePlayer';
import { HTMLAttributes } from 'react';

export const longPressOptions = {
  isPreventDefault: false,
  delay: 800
};

export interface IMusicCardProps
  extends IMusicPost,
    HTMLAttributes<HTMLDivElement> {
  large?: boolean;
  playing?: boolean;
  showDuration?: boolean;
  clickAction?: () => void;
}

export function MusicCard({
  name,
  artists,
  duration,
  imageUrl,
  fileUrl,
  identification,
  description,
  usersHasLiked,
  usersHasReported,
  usersHasSaved,
  explicit,
  categories,
  large,
  comments,
  createdAt,
  ...props
}: IMusicCardProps) {
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
      identification: identification,
      name: name,
      artists: artists,
      duration: duration,
      imageUrl: imageUrl,
      fileUrl: fileUrl,
      description: description,
      explicit: explicit,
      usersHasLiked: usersHasLiked,
      usersHasReported: usersHasReported,
      usersHasSaved: usersHasSaved,
      categories: categories,
      createdAt: createdAt,
      comments: comments
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
      {large ? (
        <MusicCardLarge
          name={name}
          artists={artists}
          duration={duration}
          imageUrl={imageUrl}
          fileUrl={fileUrl}
          identification={identification}
          playing={
            player.getCurrentTrack().fileUrl === fileUrl &&
            player.getOpen() &&
            player.getPlaying()
          }
          description={description}
          explicit={explicit}
          usersHasLiked={usersHasLiked}
          usersHasReported={usersHasReported}
          usersHasSaved={usersHasSaved}
          categories={categories}
          clickAction={handleClickAction}
          comments={comments}
          createdAt={createdAt}
          {...props}
        />
      ) : (
        <MusicCardSmall
          name={name}
          artists={artists}
          duration={duration}
          imageUrl={imageUrl}
          fileUrl={fileUrl}
          identification={identification}
          playing={
            player.getCurrentTrack().fileUrl === fileUrl &&
            player.getOpen() &&
            player.getPlaying()
          }
          description={description}
          explicit={explicit}
          usersHasLiked={usersHasLiked}
          usersHasReported={usersHasReported}
          usersHasSaved={usersHasSaved}
          categories={categories}
          clickAction={handleClickAction}
          comments={comments}
          createdAt={createdAt}
          {...props}
        />
      )}
    </>
  );
}
