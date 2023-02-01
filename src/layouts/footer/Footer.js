import React from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo fill="white" />
      </div>
      <div className={styles.rights}>© 2020 Kasa. All rights reserved</div>
    </div>
  );
}
export default Footer;
