import React from "react";
import styles from "./Thumb.module.scss";

function Thumb() {
  return (
    <div className={styles.gallery}>
      <div className={styles.card}>
        <div className={styles.title}>Titre de la location</div>
      </div>
      <div className={styles.card}>
        <div className={styles.title}>Titre de la location</div>
      </div>
      <div className={styles.card}>
        <div className={styles.title}>Titre de la location</div>
      </div>
      <div className={styles.card}>
        <div className={styles.title}>Titre de la location</div>
      </div>
      <div className={styles.card}>
        <div className={styles.title}>Titre de la location</div>
      </div>
      <div className={styles.card}>
        <div className={styles.title}>Titre de la location</div>
      </div>
    </div>
  );
}

export default Thumb;
