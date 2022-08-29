import {
  Container,
  DescriptionContent,
  Interaction,
  ContentInteraction,
  TitleDescription
} from './style';
import { fetchedPost } from '../../index';
import { Button } from '../../../../components/Widgets/Buttons/Button';
import { MdFavoriteBorder } from 'react-icons/md';
export function Description() {
  return (
    <Container>
      <strong>
        <TitleDescription>Banza do Gorila Roxo</TitleDescription>
      </strong>
      <DescriptionContent>{fetchedPost.description}</DescriptionContent>
      <Interaction>
        <ContentInteraction>
          <Button rounded>
            <MdFavoriteBorder size={16} />
          </Button>
        </ContentInteraction>
      </Interaction>
    </Container>
  );
}
