import { useMobile } from '../../../hooks/useMobile';
import {
  Bar,
  Actions,
  BodyBar,
  ButtonBar,
  ContentUnBodyBar,
  LikeBar
} from './styles';
import { MdChevronLeft, MdOutlineChat, MdOutlineShare } from 'react-icons/md';
import { IconProfile } from '../../General/IconProfile';
import { Button } from '../../Widgets/Buttons/Button';
import { LikeButton } from '../../Widgets/Buttons/ActionButtons/LikeButton';
import { IconContext } from 'react-icons';
import { SaveButton } from '../../Widgets/Buttons/ActionButtons/SaveButton';
import { ReportButton } from '../../Widgets/Buttons/ActionButtons/ReportButton';
import { useState } from 'react';
import { IProfile } from '../../../types/profile';

export function InteractionBar() {
  const { isMobile } = useMobile();
  const [interactionBarActive, setInteractionBarActive] =
    useState<boolean>(false);

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

  return (
    <>
      {!isMobile ? (
        <BodyBar>
          <IconProfile user={user} />

          <IconContext.Provider value={{ size: '40' }}>
            <LikeButton />
            <Button rounded>
              <MdOutlineChat />
            </Button>
            <Button rounded>
              <MdOutlineShare />
            </Button>
            <SaveButton />
            <ReportButton />
          </IconContext.Provider>
        </BodyBar>
      ) : (
        <>
          <Bar $active={interactionBarActive}>
            {/*  */}
            <ContentUnBodyBar>
              <ButtonBar
                onClick={() => setInteractionBarActive(state => !state)}
              >
                <MdChevronLeft size={20} />
              </ButtonBar>

              <Actions>
                <IconContext.Provider value={{ size: '32' }}>
                  <IconProfile user={user} />
                  <Button full={false} rounded>
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
      )}
    </>
  );
}
