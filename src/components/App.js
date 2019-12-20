import React from 'react';
import '../stylesheets/App.scss';
import Pokelist from './Pokelist';
import data from '../api/data.json';

// console.log(data)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data
    }
  }

  render() {
    return (
      <div className="App">
        {/* {JSON.stringify(this.state.pokemons)} */}
        <Pokelist pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
