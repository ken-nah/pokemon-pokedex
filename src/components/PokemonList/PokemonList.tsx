import styled from 'styled-components';

const PokemonList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 5rem;
`;

export default PokemonList;
