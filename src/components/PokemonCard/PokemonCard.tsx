import React from 'react';
import styled from 'styled-components';

import useFetchPokemon from 'src/hooks/useFetchPokemons';
import { Pokemon, PokemonInfo } from 'src/utils/shared-types';
import { toTitleCase } from 'src/utils/helperFunctions';

import Button from '../UI/Button';
import PokemonCardPlaceholder from '../Placeholders/PokemonCard';

type Props = {
  pokemon: Pokemon;
  onClick: (pokemon: PokemonInfo) => void;
};

const Card = styled.div`
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 0.6rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem 3rem;
  position: relative;
`;

const PokemonImage = styled.div`
  background-image: url('/icons/blob.svg');
  height: 10rem;
  width: 10rem;
  transform: translateY(-4rem);
`;

const PokemonDetails = styled.div`
  text-align: center;
  transform: translateY(-3rem);

  span {
    color: var(--color-dark-gray);
    display: block;
    font-weight: 600;
    font-size: 1.4rem;
  }

  p {
    color: var(--color-dark-blue);
    font-weight: 700;
    font-size: 1.4rem;
  }
`;

const PokemonTypes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1rem;
  row-gap: 1rem;
`;

const PokemonCard: React.FC<Props> = (props) => {
  const { pokemon } = props;
  const { data, error } = useFetchPokemon<PokemonInfo>({ name: pokemon.name });

  if (error) return <h2>Error..</h2>;
  if (!data) return <PokemonCardPlaceholder />;

  return (
    <Card onClick={() => props.onClick(data)}>
      <PokemonImage>
        <img src={data.sprites.front_default} alt="pokemon" />
      </PokemonImage>
      <PokemonDetails>
        <span># {data.id}</span>
        <p>{toTitleCase(data.name)}</p>
      </PokemonDetails>
      <PokemonTypes>
        {data.types.map((type) => (
          <Button key={type.slot} color={type.type.name} size="small">
            {type.type.name}
          </Button>
        ))}
      </PokemonTypes>
    </Card>
  );
};

export default PokemonCard;
