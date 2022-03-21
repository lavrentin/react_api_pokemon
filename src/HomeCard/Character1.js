import React from "react";
import './HomeCard.css';

function Character1() {
  return (
    <div className="HomeCard">
      <div className="cardBlok">
      <div className="cardImg position1"></div>
        <h4 className="titleName">Ash Ketchum</h4>
        <span className="spanName">
          Ash Ketchum is the main protagonist of the Pokémon anime series. In
          the Japanese version of the series, his name is Satoshi. In addition
          to anime, Ash has appeared in a variety of Pokémon-related products
          such as manga, feature films, games, and other media products.
        </span>
      </div>
    </div>
  );
}

export default Character1;
