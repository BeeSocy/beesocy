import {
  BreadCrump,
  BreadCrumpContainer,
  Container,
  Header,
  Title
} from './styles';

interface IListProps {
  title: string;
}
export function List({ title }: IListProps) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <BreadCrumpContainer>
          <BreadCrump>Música</BreadCrump>
          <BreadCrump>Imagens</BreadCrump>
          <BreadCrump>Códigos</BreadCrump>
        </BreadCrumpContainer>
      </Header>
    </Container>
  );
}
