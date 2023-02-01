import React from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo fill="var(--primary)" />
      </div>
      <div className={styles.nav}>
        <div className={styles.home}>
          <Link to={"/"}> Accueil </Link>
        </div>
        <div className={styles.about}>
          <Link to={"/about"}> A Propos </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
