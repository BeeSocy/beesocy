import { useRef } from 'react';
import { usePlayer } from '../../../../../context/PlayerProvider/usePlayer';
import { MusicCard } from '../../../../Cards/MusicCard';
import { Container, Item } from './styles';

export function TracksList() {
  const player = usePlayer();

  const MusicCardRef = useRef<HTMLDivElement>(null);

  function onDragStart(event: React.DragEvent<HTMLDivElement>) {
    console.log(event.target);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setDragImage(event.currentTarget, 50000, 50000);

    const dragGhostNode = (event.target as HTMLDivElement).cloneNode(true);

    (dragGhostNode as HTMLDivElement).style.position = 'absolute';

    (dragGhostNode as HTMLDivElement).style.zIndex = '120';

    (dragGhostNode as HTMLDivElement).style.top = `${
      event.pageY - (event.target as HTMLDivElement).offsetHeight / 2
    }px`;

    (dragGhostNode as HTMLDivElement).style.left = `${
      event.pageX - (event.target as HTMLDivElement).offsetWidth / 2
    }px`;

    (dragGhostNode as HTMLDivElement).style.height = `${
      (event.target as HTMLDivElement).offsetHeight
    }px`;

    (dragGhostNode as HTMLDivElement).style.width = `${
      (event.target as HTMLDivElement).offsetWidth
    }px`;

    (dragGhostNode as HTMLDivElement).style.opacity = '0.8';

    (dragGhostNode as HTMLDivElement).style.pointerEvents = 'none';

    document.body.prepend(dragGhostNode);

    (event.target as HTMLDivElement).setAttribute('data-dragging', 'true');
  }

  return (
    <Container>
      {player.getTrackList().map(track => (
        <Item
          key={track.identification}
          draggable="true"
          onDragStart={event => onDragStart(event)}
          ref={MusicCardRef}
        >
          <MusicCard
            key={track.identification}
            identification={track.identification}
            name={track.name}
            artists={track.artists}
            duration={track.duration}
            imageUrl={track.imageUrl}
            fileUrl={track.fileUrl}
            description={track.description}
            explicit={track.explicit}
            large={false}
            playlist={track.playlist}
            isLiked={track.isLiked}
            isReported={track.isReported}
            isSaved={track.isSaved}
            categoriesId={track.categoriesId}
          />
        </Item>
      ))}
    </Container>
  );
}
