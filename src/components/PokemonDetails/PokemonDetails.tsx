import { PokemonInfo } from 'src/utils/shared-types';
import { sanitizeText, toTitleCase } from 'src/utils/helperFunctions';

import { Button } from '../UI';

import {
  Abilites,
  Badge,
  BodyMass,
  Image,
  MiniTitle,
  Name,
  Number,
  PokemonContainer,
  NoneSelected,
  Types,
  Stat,
  StatBox,
  StatLabel,
  Stats,
} from './PokemonDetails.styles';

type Props = {
  pokemon?: PokemonInfo;
};

type PokemonStats = {
  [key: string]: {
    color: string;
    label: string;
  };
};

const pokemonStats: PokemonStats = {
  hp: {
    label: 'HP',
    color: '#dfb613',
  },
  attack: {
    label: 'AT',
    color: '#F85888',
  },
  defense: {
    label: 'DF',
    color: '#A8B820',
  },
  specialattack: {
    label: 'SA',
    color: '#2013e2',
  },
  specialdefense: {
    label: 'SD',
    color: '#137a24',
  },
  speed: {
    label: 'SP',
    color: '#b60f0f',
  },
};

const statDetails = (name: string) => {
  const { label, color } = pokemonStats[`${sanitizeText(name)}`];
  return { color, label };
};

const PokemonDetails: React.FC<Props> = (props) => {
  const { pokemon } = props;

  if (!pokemon)
    return (
      <PokemonContainer>
        <NoneSelected>
          Click the card to view more details about Pokemon
        </NoneSelected>
      </PokemonContainer>
    );

  return (
    <PokemonContainer>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
      <Number># {pokemon.id}</Number>
      <Name>{toTitleCase(pokemon.name)}</Name>
      <Types>
        {pokemon.types.map((type) => (
          <Button key={type.slot} color={type.type.name} size="small">
            {type.type.name}
          </Button>
        ))}
      </Types>
      <MiniTitle>Abilities</MiniTitle>
      <Abilites>
        {pokemon.abilities.map(({ ability }) => (
          <Badge key={ability.name} hasBorder>
            {toTitleCase(ability.name)}
          </Badge>
        ))}
      </Abilites>
      <BodyMass>
        <div>
          <MiniTitle>Height</MiniTitle>
          <Badge>{pokemon.height / 10}m</Badge>
        </div>
        <div>
          <MiniTitle>Weight</MiniTitle>
          <Badge>{pokemon.weight / 10}kg</Badge>
        </div>
      </BodyMass>
      <MiniTitle>Stats</MiniTitle>
      <Stats>
        {pokemon.stats.map(({ base_stat, stat }) => (
          <StatBox key={stat.name}>
            <Stat color={statDetails(stat.name).color}>
              {statDetails(stat.name).label}
            </Stat>
            <StatLabel>{base_stat}</StatLabel>
          </StatBox>
        ))}
      </Stats>
    </PokemonContainer>
  );
};

export default PokemonDetails;
