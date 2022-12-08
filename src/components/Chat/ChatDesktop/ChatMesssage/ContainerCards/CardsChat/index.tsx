import { useState } from 'react';

import { ListMessage } from '../../ListMessages';

import { messageCard } from './types';

export const CardsChat = () => {
  const [list, setList] = useState<messageCard[]>([]);

  const handleAddTask = (taskMessage: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      message: taskMessage,
      time: undefined,
      delete: false
    });
    setList(newList);
  };

  return (
    <>
      {list.map((list, index) => (
        <ListMessage key={index} list={list} />
      ))}
    </>
  );
};
