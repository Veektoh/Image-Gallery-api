import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";

function Header({ onSearchImage }) {
  return (
    <header className="header-div">
      <div className="header-content">
        <h1>Image Gallery with React</h1>
        <h2>Search and download any image within a seconds</h2>
        <SearchBar onSearchImage={onSearchImage} />
      </div>
    </header>
  );
}

export default Header;
