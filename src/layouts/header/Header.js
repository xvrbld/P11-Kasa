import React from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo fill="var(--primary)" />
      </div>
      <div className={styles.nav}>
          <NavLink className={styles.link} to={"/"}> Accueil </NavLink>
          <NavLink className={styles.link} to={"/about"}> A Propos </NavLink>
      </div>
    </div>
  );
}
export default Header;
