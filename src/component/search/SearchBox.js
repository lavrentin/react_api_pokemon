import React from "react";
import "../Card.css";
function SearchBox({ placeholder, handleChange }) {
  return (
    <div className="searchStyle">
      <input
        className="inputSearch"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
