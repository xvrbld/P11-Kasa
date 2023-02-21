import React from "react";
import styles from "./Banner.module.scss";

function Banner(props) {
  const isMobile = window.innerWidth <= 480; // Set the breakpoint for mobile devices
  const imageHeight = isMobile ? props.mobileHeight : props.desktopHeight;
  return (
    <div className={styles.banner}>
      <img src={props.img} alt="banner" style={{ height: `${imageHeight}` }}></img>
      <div className={styles.caption}>{props.text}</div>
    </div>
  );
}

export default Banner;
