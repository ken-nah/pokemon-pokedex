import * as React from 'react';

import { Pokemon } from 'src/utils/shared-types';
import useFetchPokemon from 'src/hooks/useFetchPokemons';

import PokemonCard from '../PokemonCard/PokemonCard';
import PokemonList from '../PokemonList/PokemonList';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

import { Container } from './PokemonContainer.styles';

type Pokemons = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

const PokemonContainer: React.FC = (props) => {
  const { data, error } = useFetchPokemon<Pokemons>();

  if (error) return <h2>Error</h2>;
  if (!data) return <h2>Loading Pokemons...</h2>;

  return (
    <Container>
      <PokemonList>
        {data.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </PokemonList>
      <PokemonDetails />
    </Container>
  );
};

export default PokemonContainer;
