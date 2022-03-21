import React from "react";
import "./Card.css";

function Card(props) {
  const link = `https://www.pokemon.com/us/pokedex/${props.pokemon.name}`;
  const img = `https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`;

  return (
    <div className="Card">
      <a href={link} target="blank" rel="noreferrer">
        <img className="imgStyle" alt="pokemon" src={img} />
        <h2>
          {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
        </h2>
      </a>
    </div>
  );
}
export default Card;
