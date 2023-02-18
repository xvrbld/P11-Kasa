import React from "react";
import styles from "./Banner.module.scss";

function Banner({ img }) {
  return (
    <div className={styles.banner}>
      <img src={img} alt="banner"></img>
      <div className={styles.caption}>Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default Banner;
