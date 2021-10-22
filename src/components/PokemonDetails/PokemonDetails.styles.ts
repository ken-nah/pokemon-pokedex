import styled from 'styled-components';

type BadgeProps = {
  hasBorder?: boolean;
};

type StatProps = {
  color: string;
};

const PokemonContainer = styled.section`
  background-color: var(--color-white);
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 5rem;
  text-align: center;
`;

const Number = styled.span`
  color: var(--color-dark-gray);
  display: block;
  font-weight: 700;
  font-size: 1.8rem;
`;

const Name = styled.h2`
  color: var(--color-dark-blue);
  font-size: 2rem;
`;

const Types = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1rem;
  row-gap: 1rem;
  margin: 1rem 0 3rem;
`;

const MiniTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
`;

const Abilites = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1rem;
`;

const Badge = styled.div<BadgeProps>`
  background-color: var(--color-light-gray);
  border-radius: 10rem;
  border: ${(props) =>
    props.hasBorder ? '1px solid var(--color-dark-gray)' : 'none'};
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.6rem 2rem;
`;

const NoneSelected = styled.h2`
  color: var(--color-dark-gray);
  font-size: 1.8rem;
  margin-top: 3rem;
`;

const Image = styled.img`
  height: 15rem;
`;

const BodyMass = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  margin: 3rem 0 4rem;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 90%;
`;

const Stat = styled.p<StatProps>`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  color: white;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  height: 3.8rem;
  width: 3.8rem;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatLabel = styled.span`
  color: var(--color-dark-gray);
  font-weight: 700;
  font-size: 1.5rem;
`;

export {
  Abilites,
  Badge,
  BodyMass,
  Image,
  MiniTitle,
  Name,
  Number,
  PokemonContainer,
  Types,
  NoneSelected,
  Stat,
  StatBox,
  StatLabel,
  Stats,
};
