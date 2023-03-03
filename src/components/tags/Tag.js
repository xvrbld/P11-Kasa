import React from "react";
import styles from "./Tag.module.scss";

function Tag({ tags }) {
  return <div className={styles.tag}>{tags}</div>;
}

export default Tag;
