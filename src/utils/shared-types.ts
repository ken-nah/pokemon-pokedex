export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonInfo = {
  abilities: Ability[];
  id: number;
  height: number;
  name: string;
  sprites: Sprites;
  stats: Stat[];
  types: PokemonType[];
  weight: number;
};

type Ability = {
  ability: {
    name: string;
    url: string;
  };
};

type Sprites = {
  front_default: string;
  front_shiny: string;
  back_default: string;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
  };
};
