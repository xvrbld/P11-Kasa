import React from "react";
import { Link } from "react-router-dom";
import styles from "./Thumb.module.scss";

function Thumb({ logement }) {
  // On ajoute les data des thumbs
  return (
    <div
      key={logement.id}
      className={styles.card}
      id={logement.id}
      style={{ backgroundImage: `url(${logement.cover})` }}
    >
      <h2 className={styles.title}>{logement.title}</h2>
      <Link to={`/logement/${logement.id}`}></Link>
    </div>
  );
}

export default Thumb;
