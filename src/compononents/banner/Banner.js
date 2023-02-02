import React from "react";
import styles from "./Banner.module.scss";
import Image from "assets/banner.jpg";

function Banner() {
  return (
    <div className={styles.banner}>
      <img src={Image} alt="banner"></img>
      <div className={styles.caption}>Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default Banner;
