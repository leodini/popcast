import React from "react";
import Search from "./Search";

const Header = (props) => {
  return (
    <div className="container">
      <h2 className="title">{props.title}</h2>
      <Search />
    </div>
  );
};

export default Header;
