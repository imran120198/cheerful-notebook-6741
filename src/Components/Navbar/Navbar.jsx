import React from "react";
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div>
        <Link to="/">
          <img src="https://animoto.com/static/logo-1d220e413f4f69fa42d66d93381db371.svg" />
        </Link>
      </div>
      <div>
        <Link className={styles.catglink} to="/create">
          <p>CREATE</p>
        </Link>
        <Link className={styles.catglink} to="/templates">
          <p>TEMPLATES</p>
        </Link>
        <Link className={styles.catglink} to="/features">
          <p>FEATURES</p>
        </Link>
        <Link className={styles.catglink} to="/pricing">
          <p>PRICING</p>
        </Link>
        <Link className={styles.catglink} to="/learn">
          <p>LEARN</p>
        </Link>
      </div>
      <div>
        <Link className={styles.catglink} to="/login">
          <p>LOG IN</p>
        </Link>

        <Link className={styles.catglink} to="/login">
          <p>SIGN UP FREE</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
