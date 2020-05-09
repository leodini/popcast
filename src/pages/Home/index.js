import React from "react";

import undraw from '../../assets/undraw.svg'
import { Search } from "../../components";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <p className="title">Popcast</p>
        <p className="subtitle">A casa dos popcasts</p>
        <Search />
        <img src={undraw} alt="podcast"/>
      </div>
    </div>
  );
};

export default Home;
