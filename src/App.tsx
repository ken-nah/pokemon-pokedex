import * as React from 'react';

// app global styles
import GlobalStyles from './App.styles';

import Pokemons from 'src/components/Pokemons/Pokemons';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Pokemons />
    </React.Fragment>
  );
};

export default App;
