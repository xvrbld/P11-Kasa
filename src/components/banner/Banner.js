import React from "react";
import styles from "./Banner.module.scss";
import { useEffect, useState } from "react";

function Banner(props) {
  const [imageHeight, setImageHeight] = useState(window.innerWidth < 480 ? props.mobileHeight : "220px");
  useEffect(() => {
    function handleResize() {
      setImageHeight(window.innerWidth < 480 ? props.mobileHeight : "220px");
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.banner}>
      <img src={props.img} alt="banner" style={{ height: `${imageHeight}` }}></img>
      <div className={styles.caption}>{props.text}</div>
    </div>
  );
}

export default Banner;
