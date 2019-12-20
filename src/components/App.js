import React from 'react';
import '../stylesheets/App.scss';
import Pokelist from './Pokelist';
import data from '../api/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">Mi lista de Pokemon</h1>
        <Pokelist pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
