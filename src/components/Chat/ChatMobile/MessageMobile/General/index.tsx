import { HTMLAttributes } from 'react';
import { ChatHeader } from '../../../ChatDesktop/ChatHeaderGeneral/ChatHeader';
import { InfoGeneral } from '../../../ChatDesktop/ChatHeaderGeneral/ChatHeaderInfo/InfoGeneral';
import { MessageCardGeneral } from '../../../ChatDesktop/ChatMesssage/MessageGeneral';
import { SectionMessege } from '../../../ChatDesktop/ContainerMessegers';
import { InputMessege } from '../../../ChatDesktop/InputMessege/InputGeneral';
import { ContainerMessage } from '../ContainerMessage';

export const MessageGeneral = () => {
  return (
    <ContainerMessage>
      <ChatHeader imgUser={''} nick={''} identification={''} lastmessage={''}>
        {' '}
        <InfoGeneral
          imgUrl={''}
          nickname={''}
          id={''}
          online={false}
          lastmessage={''}
        />
      </ChatHeader>
      <SectionMessege>
        <MessageCardGeneral />
      </SectionMessege>
      <InputMessege />
    </ContainerMessage>
  );
};
