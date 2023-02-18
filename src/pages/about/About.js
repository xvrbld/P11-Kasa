import React from "react";
import Banner from "compononents/banner/Banner";
import Image from "assets/banner-about.jpg";
import Collapse from "compononents/collapse/Collapse";
import { aboutContent } from "data/about";
import styles from "./About.module.scss";

function About() {
  return (
    <div>
      <Banner img={Image} />
      <div className={styles.collapses}>
      {aboutContent.map((item, index) => (
          <Collapse key={index} collapseLabel={item.title} collapseText={item.description} />
        ))}
        </div>
    </div>
  );
}

export default About;
