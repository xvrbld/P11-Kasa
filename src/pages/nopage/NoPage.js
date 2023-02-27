import React from "react";
import styles from "./NoPage.module.scss";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className={styles.NoPage}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.desc}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NoPage;
