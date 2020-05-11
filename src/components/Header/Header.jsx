import React from "react";
import { Link } from 'react-router-dom'

import { Search } from "../";
import styles from './Header.module.css'

//set default title to popcast
const Header = ({title = 'Popcast'}) => {
  return (
    <div className={styles.container}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <Search />
      <div className={styles.navigation_container}>
        <Link to="/curated" style={{ textDecoration: 'none' }}>
          <h2 className={styles.navigation}>Curated</h2>
        </Link>
        <Link to="/justlisten" style={{ textDecoration: 'none' }}>
          <h2 className={styles.navigation}>Just listen</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
