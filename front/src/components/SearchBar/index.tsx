import { Container } from './styles';

import { MdSearch } from 'react-icons/md';

export function SearchBar() {
  return (
    <Container>
      <input id="search-bar" type="text" placeholder="Digite sua busca"></input>
      <label htmlFor="search-bar">
        <MdSearch size={'24'} />
      </label>
    </Container>
  );
}
