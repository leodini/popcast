import React from "react";
import { Search } from "../";
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

//set default title to popcast
const Header = ({title = 'Popcast'}) => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <Search />
    </div>
  );
};

export default Header;
