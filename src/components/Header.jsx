import React from "react";
import logo from "../Images/logo.png";

const Header = ({ query, setQuery }) => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <input
        type="text"
        placeholder="search characters..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Header;
