import React, { Component } from 'react';
import './App.css';
import PokeListItem from './Components/PokeListItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="pokeball-back" id="pokeball-back" src="http://hanashiro.github.io/pokedex/images/pokeball.svg" alt="" />
        <input type="text" id="pokeFilter" placeholder="Search" />

        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
      </div>
    );
  }
}

export default App;
