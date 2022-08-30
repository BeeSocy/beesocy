import { IMusicPost } from '../../../types/musicPost';
import { MusicCardSmall } from './MusicCardSmall';
import { MusicCardLarge } from './MusicCardLarge';

export interface IMusicCardProps extends IMusicPost {
  large?: boolean;
  playing?: boolean;
  showDuration?: boolean;
}

export function formatArtists(artists: string[]): string {
  let formattedString = '';
  if (artists.length > 1) {
    artists.map((value, index) => {
      formattedString += value;
      if (index == artists.length - 2) {
        formattedString += ' e ';
      } else if (index != artists.length - 1) {
        formattedString += ', ';
      }
    });
  } else {
    formattedString = artists[0];
  }

  return formattedString;
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
        />
      )}
    </>
  );
}
