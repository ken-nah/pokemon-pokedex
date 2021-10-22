import styled from 'styled-components';

const PokemonCardPlaceholder = styled.div`
  color: transparent;
  background: linear-gradient(100deg, #fff 30%, #fff 50%, #eceff1 70%);
  background-size: 400%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 0.6rem;
  height: 20rem;
  width: 100%;
  animation: loading 1.2s ease-in-out infinite;

  @keyframes loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export default PokemonCardPlaceholder;
