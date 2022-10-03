import { useMobile } from '../../../hooks/useMobile';
import { Bar, Actions, ButtonBar, ContentUnBodyBar, LikeBar } from './styles';
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineChat,
  MdOutlineShare
} from 'react-icons/md';
import { IconProfile } from '../../General/IconProfile';
import { Button } from '../../Widgets/Buttons/Button';
import { LikeButton } from '../../Widgets/Buttons/ActionButtons/LikeButton';
import { IconContext } from 'react-icons';
import { SaveButton } from '../../Widgets/Buttons/ActionButtons/SaveButton';
import { ReportButton } from '../../Widgets/Buttons/ActionButtons/ReportButton';
import { useEffect, useRef, useState } from 'react';
import { IProfile } from '../../../types/profile';
import { useHoverDirty } from 'react-use';

export function InteractionBar() {
  const user: IProfile = {
    identification: 'ba6d41c7-0be2-496d-816b-37f0881561fe',
    name: 'Marcelo',
    nickname: 'marcalocria',
    imageUrl:
      'https://images.unsplash.com/photo-1664441380727-b6ef224ee6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    follows: [],
    followers: [],
    color: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae nostrum, dicta ullam ut commodi corporis voluptates numquam deserunt atque laboriosam, odit molestiae. Aperiam ipsam consectetur nihil dolore nobis perspiciatis.'
  };

  const [interactionBarActive, setInteractionBarActive] =
    useState<boolean>(false);

  const barRef = useRef<HTMLDivElement>(null);

  const isBarHover = useHoverDirty(barRef);

  function scrollToComments() {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    setInteractionBarActive(isBarHover);
  }, [isBarHover]);

  return (
    <>
      <Bar $active={interactionBarActive} ref={barRef}>
        <ContentUnBodyBar>
          <ButtonBar onClick={() => setInteractionBarActive(state => !state)}>
            <MdChevronLeft size={20} />
          </ButtonBar>

          <Actions>
            <IconContext.Provider value={{ size: '32' }}>
              <IconProfile user={user} />
              <Button full={false} rounded onClick={scrollToComments}>
                <MdOutlineChat />
              </Button>
              <Button full={false} rounded>
                <MdOutlineShare />
              </Button>
              <SaveButton />
              <ReportButton />
            </IconContext.Provider>
          </Actions>
        </ContentUnBodyBar>
      </Bar>

      <LikeBar>
        <LikeButton />
      </LikeBar>
    </>
  );
}
