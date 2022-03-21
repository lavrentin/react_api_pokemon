import React from "react";
import Card from "../component/Card";
import "./Card.css";

function CardList(props) {
  return (
    <div className="CardList">
      {props.pokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default CardList;
