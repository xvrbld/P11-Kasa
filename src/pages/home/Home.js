import React from "react";
import Banner from "components/banner/Banner";
import Thumb from "components/thumb/Thumb";
import Image from "assets/banner-home.jpg";
import styles from "./Home.module.scss";
import data from "data/kasa.json";

function Home() {
  return (
    <div>
      <Banner
        img={Image}
        text="Chez vous, partout et ailleurs"
        mobileHeight="110px"
      />
      <div className={styles.gallery}>
        {data.map((item, index) => (
          <Thumb key={index} logement={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
