import { useEffect, useRef } from 'react';
import {
  MdExplicit,
  MdPauseCircleFilled,
  MdPlayCircleFilled,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';
import { handlePreviousMusic, handlePlayMusic, handleNextMusic } from '../..';

import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { Button } from '../../../Widgets/Buttons/Button';
import {
  Container,
  MusicContainer,
  MusicDetails,
  MusicInfo,
  Wrapper,
  Specs,
  Controls,
  StyledTitle
} from './styles';

export function MobileSmallPlayer() {
  const player = usePlayer();

  const DetailsContainerRef = useRef<HTMLDivElement>(null);
  const TitleSpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (DetailsContainerRef.current && TitleSpanRef.current) {
      if (
        TitleSpanRef.current?.scrollWidth >
        DetailsContainerRef.current?.offsetWidth
      ) {
        let invertScroll = true;

        setInterval(() => {
          if (invertScroll) {
            TitleSpanRef.current?.scrollTo({
              left: (TitleSpanRef.current.scrollLeft -= 1),
              behavior: 'smooth'
            });
          } else {
            TitleSpanRef.current?.scrollTo({
              left: (TitleSpanRef.current.scrollLeft += 1),
              behavior: 'smooth'
            });
          }

          if (TitleSpanRef.current && TitleSpanRef.current.scrollLeft == 0) {
            setTimeout(() => {
              invertScroll = false;
            }, 2000);
          }

          if (
            TitleSpanRef.current &&
            TitleSpanRef.current.offsetWidth +
              Math.round(TitleSpanRef.current.scrollLeft) ==
              TitleSpanRef.current.scrollWidth
          ) {
            setTimeout(() => {
              invertScroll = true;
            }, 1000);
          }
        }, 50);
      }
    }
  }, []);

  return (
    <Container
      onClick={event => {
        player.handleChangeLarge(!player.getLarge());
        event.stopPropagation();
      }}
    >
      <Wrapper>
        <MusicContainer>
          <img src={player.getCurrentTrack()?.imageUrl} />

          <MusicDetails ref={DetailsContainerRef}>
            <StyledTitle size="small" ref={TitleSpanRef}>
              {player.getCurrentTrack()?.name}
            </StyledTitle>

            <MusicInfo>
              <span>
                {player.getCurrentTrack()?.explicit && <MdExplicit size={20} />}
              </span>

              <span>
                {player?.getCurrentTrack() &&
                  player.formatArtists(player.getCurrentTrack().artists)}
              </span>
            </MusicInfo>
          </MusicDetails>
        </MusicContainer>

        <Specs>
          <Controls
            onClick={event => {
              event.stopPropagation();
            }}
          >
            <Button onClick={handlePreviousMusic} rounded full={false}>
              <MdSkipPrevious />
            </Button>

            <Button onClick={handlePlayMusic} rounded full={false}>
              {player.getPlaying() ? (
                <MdPauseCircleFilled style={{ transform: 'scale(1.5)' }} />
              ) : (
                <MdPlayCircleFilled style={{ transform: 'scale(1.5)' }} />
              )}
            </Button>

            <Button onClick={handleNextMusic} rounded full={false}>
              <MdSkipNext />
            </Button>
          </Controls>
        </Specs>
      </Wrapper>
    </Container>
  );
}
