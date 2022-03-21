import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ApiPokemon from "../API/Api_pokemon";
import HomePage from "../component/HomePage";
import "./navLink.css";
function Nav() {
  return (
    <BrowserRouter>
      <div className="navBarStyle">
        <div className="link">
          <div className="pokebool"></div>
        </div>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/Pokemon" className="link">
          Pokemon
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Pokemon" element={<ApiPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Nav;
