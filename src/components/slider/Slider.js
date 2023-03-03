import React, { useState } from "react";
import styles from "./Slider.module.scss";

function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const imageCount = `${currentIndex + 1}/${pictures.length}`;

  return (
    <div className={styles.slider}>
      <div className={styles.arrowRight} onClick={goToPrevImage}>
        <svg
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
      </div>
      <img src={pictures[currentIndex]} alt="slider" className={styles.pictures} />
      <div className={styles.arrowLeft} onClick={goToNextImage}>
        <svg
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.imageCount}>{imageCount}</div>
    </div>
  );
}

export default Slider;
