import { isFirstDayOfMonth } from 'date-fns/fp';
import React, {
  ChangeEvent,
  FormEvent,
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  ReactHTMLElement,
  StyleHTMLAttributes,
  useEffect,
  useState
} from 'react';
import { render } from 'react-dom';
import { MdMic, MdOutlinePermMedia, MdSend } from 'react-icons/md';
import {
  ReactMediaRecorder,
  useReactMediaRecorder
} from 'react-media-recorder';
import { useMobile } from '../../../../../hooks/useMobile';
import { Button } from '../../../../Widgets/Buttons/Button';
import { ContainerInput } from '../ContainerInput';
import { AlingInput } from '../ContainerInput/styles';
import { FakeInput } from '../FakeInput';
import { InputMsg } from '../InputMsg';
import { FormMessage, SectionInput } from './styles';

export const InputMessege = () => {
  const { isMobile } = useMobile();
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
      {!isMobile ? (
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
                  onEnter={() => {}}
                  value=""
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
      ) : (
        <>
          <AlingInput>
            <ContainerInput>
              <FakeInput>
                <SectionInput>
                  <InputMsg
                    name={'inpt-msg'}
                    children={isRecording ? <MdSend /> : <MdMic />}
                    onEnter={function (taskName: string): void {
                      throw new Error('Function not implemented.');
                    }}
                  />
                </SectionInput>
                <Button rounded full={false}>
                  <MdMic />
                </Button>
              </FakeInput>

              <Button rounded full={false}>
                <MdOutlinePermMedia />
              </Button>
            </ContainerInput>
          </AlingInput>
        </>
      )}
    </>
  );
};
function onEnter(inputText: any) {
  throw new Error('Function not implemented.');
}
