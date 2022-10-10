import React, { useRef } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';

import { usePlayer } from '../../../context/PlayerProvider/usePlayer';
import { IMusicPost } from '../../../types/musicPost';
import { MusicCard } from '../../Cards/MusicCard';
import { Container, Item } from './styles';

interface DraggableItemProps {
  track: IMusicPost;
  index: number;
}

function DraggableItem({ track, index }: DraggableItemProps) {
  return (
    <Draggable
      key={track.identification}
      index={index}
      draggableId={track.identification}
    >
      {provided => (
        <Item
          key={track.identification}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
            categories={track.categories}
          />
        </Item>
      )}
    </Draggable>
  );
}

interface IDraggableItemListProps {
  trackList: IMusicPost[];
}

function DraggableItemList({ trackList }: IDraggableItemListProps) {
  return (
    <>
      {trackList.map((track, index) => (
        <DraggableItem key={track.identification} index={index} track={track} />
      ))}
    </>
  );
}

export function TracksList() {
  const player = usePlayer();

  function reorderArray<T>(
    list: T[],
    startIndex: number,
    endIndex: number
  ): T[] {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderTrackList = reorderArray(
      player.getTrackList(),
      result.source.index,
      result.destination.index
    );

    player.setTrackList(reorderTrackList);

    if (result.source.index + 1 > player.getPositionOnTrackList()) {
      if (result.destination.index + 1 <= player.getPositionOnTrackList()) {
        player.setPositionOnTrackList(player.getPositionOnTrackList() + 1);
      }
    }

    if (result.source.index + 1 === player.getPositionOnTrackList()) {
      player.setPositionOnTrackList(result.destination.index + 1);
    }
  }

  return (
    <DragDropContext onDragEnd={result => onDragEnd(result)}>
      <Droppable droppableId="list">
        {provided => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            <DraggableItemList trackList={player.getTrackList()} />
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}
