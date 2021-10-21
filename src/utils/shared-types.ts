export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonInfo = {
  id: number;
  name: string;
  sprites: Sprites;
  types: PokemonType[];
};

type Sprites = {
  front_default: string;
  back_default: string;
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
  };
};
