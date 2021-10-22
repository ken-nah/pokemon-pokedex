import * as React from 'react';
import styled from 'styled-components';

import { Pokemon, PokemonInfo } from 'src/utils/shared-types';
import useFetchPokemon from 'src/hooks/useFetchPokemons';

import { Button, Container } from '../UI';
import PokemonCard from '../PokemonCard/PokemonCard';
import PokemonList from '../PokemonList/PokemonList';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import PokemonCardPlaceholder from '../Placeholders/PokemonCard';

type PokemonsData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;

const Pokemons: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [selectedPokemon, setSelectedPokemon] = React.useState<PokemonInfo>();
  const { data, error } = useFetchPokemon<PokemonsData>({ page });

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSelectPokemon = (pokemon: PokemonInfo) => {
    window.scrollTo(0, 0);
    setSelectedPokemon(pokemon);
  };

  if (error) return <h2>Error</h2>;

  if (!data)
    return (
      <Container>
        <PokemonList>
          {Array(12)
            .fill('placeholder')
            .map((_, index) => (
              <PokemonCardPlaceholder key={index} />
            ))}
        </PokemonList>
        <PokemonDetails pokemon={selectedPokemon} />
      </Container>
    );

  return (
    <Container>
      <div>
        <PokemonList>
          {data.results.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              onClick={handleSelectPokemon}
            />
          ))}
        </PokemonList>
        <Pagination>
          {data.previous ? (
            <Button onClick={handlePreviousPage}>Previous</Button>
          ) : (
            <span>&nbsp;</span>
          )}
          {data.next && (
            <Button color="normal" onClick={handleNextPage}>
              Next
            </Button>
          )}
        </Pagination>
      </div>
      <PokemonDetails pokemon={selectedPokemon} />
    </Container>
  );
};

export default Pokemons;
