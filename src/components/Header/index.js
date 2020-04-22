import React from "react";
import Search from "../Search";
import { Link } from 'react-router-dom'

//set default title to popcast
const Header = ({title = 'Popcast'}) => {
  return (
    <div className="container">
      <Link to="/">
        <h2 className="title">{title}</h2>
      </Link>
      <Search />
    </div>
  );
};

export default Header;
