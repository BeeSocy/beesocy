import React, { useRef } from 'react';
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

    (dragGhostNode as HTMLDivElement).setAttribute('data-dragging', 'false');

    (dragGhostNode as HTMLDivElement).id = 'dragGhostNode';

    document.body.prepend(dragGhostNode);

    (event.target as HTMLDivElement).setAttribute('data-dragging', 'true');
  }

  function onDrag(event: React.DragEvent) {
    const dragGhostNode = document.querySelector('#dragGhostNode');

    (dragGhostNode as HTMLDivElement).style.top = `${
      event.pageY - (event.target as HTMLDivElement).offsetHeight / 2
    }px`;

    (dragGhostNode as HTMLDivElement).style.left = `${
      event.pageX - (event.target as HTMLDivElement).offsetWidth / 2
    }px`;
  }

  function onDragEnd(event: React.DragEvent) {
    document.querySelector('#dragGhostNode')?.remove();
    (event.target as HTMLDivElement).setAttribute('data-dragging', 'false');
  }

  function onDragEnter(event: React.DragEvent) {
    (event.target as HTMLDivElement).setAttribute('data-dragging-over', 'true');
  }

  function onDragLeave(event: React.DragEvent) {
    (event.target as HTMLDivElement).setAttribute(
      'data-dragging-over',
      'false'
    );
  }

  function onDragOver(event: React.DragEvent) {
    event.preventDefault();
  }

  return (
    <Container>
      {player.getTrackList().map(track => (
        <Item
          key={track.identification}
          draggable="true"
          onDrag={event => onDrag(event)}
          onDragEnter={event => onDragEnter(event)}
          onDragLeave={event => onDragLeave(event)}
          onDragStart={event => onDragStart(event)}
          onDragEnd={event => onDragEnd(event)}
          onDragOver={event => onDragOver(event)}
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
            comments={track.comments}
            createdAt={track.createdAt}
            usersHasLiked={track.usersHasLiked}
            usersHasReported={track.usersHasReported}
            usersHasSaved={track.usersHasSaved}
            categoriesId={track.categoriesId}
          />
        </Item>
      ))}
    </Container>
  );
}
