// app global styles
import GlobalStyles from './App.styles';

import PokemonContainer from 'src/components/PokemonContainer/PokemonContainer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <PokemonContainer />
    </>
  );
};

export default App;
