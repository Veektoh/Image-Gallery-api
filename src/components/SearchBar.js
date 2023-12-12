import React from "react";
import "./SearchBar.css";
import { LuSearch } from "react-icons/lu";

function SearchBar({ onSearchImage }) {
  return (
    <div className="search-div">
      <LuSearch className="search-icon" />
      <input
        className="search-bar"
        type="search"
        placeholder="Search Images"
        onKeyUp={onSearchImage}
      />
    </div>
  );
}

export default SearchBar;
