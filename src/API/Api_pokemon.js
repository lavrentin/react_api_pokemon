import React, { Component } from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/search/SearchBox";

class ApiPokemon extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((response) => response.json())
      .then((name) => this.setState({ pokemons: name.results }));
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="ApiPokemon">
        <SearchBox
          placeholder="Search Pokemon"
          handleChange={this.handleChange}
        />
        <CardList pokemons={fileteredPokemons} />
      </div>
    );
  }
}

export default ApiPokemon;
