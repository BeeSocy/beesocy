import { MotionValue } from 'framer-motion';
import { useState } from 'react';
import { MdSend, MdMic, MdOutlinePermMedia } from 'react-icons/md';
import { useReactMediaRecorder } from 'react-media-recorder';
import { Button } from '../../../../../Widgets/Buttons/Button';
import { ContainerInput } from '../../../InputMessege/ContainerInput';
import { FakeInput } from '../../../InputMessege/FakeInput';
import {
  FormMessage,
  SectionInput
} from '../../../InputMessege/InputGeneral/styles';
import { InputMsg } from '../../../InputMessege/InputMsg';
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

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const [isRecording, setIsRecording] = useState<boolean>(false);

  function handleSetRecording() {
    if (isRecording) {
      stopRecording();
      setIsRecording(false);
    } else {
      startRecording();
      setIsRecording(true);
    }
  }

  return (
    <>
      {list.map((list, index) => (
        <ListMessage key={index} list={list} />
      ))}

      <FormMessage
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <ContainerInput>
          <FakeInput>
            <SectionInput>
              <InputMsg
                name={'inpt-msg'}
                children={isRecording ? <MdSend /> : <MdMic />}
                onEnter={handleAddTask}
                value="a"
              />
            </SectionInput>
            <Button
              type="button"
              rounded
              full={false}
              onClick={handleSetRecording}
            >
              {isRecording ? <MdSend /> : <MdMic />}
            </Button>
          </FakeInput>

          <Button type="button" rounded full={false}>
            <MdOutlinePermMedia />
          </Button>
        </ContainerInput>
      </FormMessage>
    </>
  );
};
