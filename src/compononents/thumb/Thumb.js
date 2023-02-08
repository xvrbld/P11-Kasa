import React, { useState, useEffect } from "react";
import styles from "./Thumb.module.scss";

function Thumb() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/kasa.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.gallery}>
      {data.map((item) => (
        <div key={item.id} className={styles.card} id={item.id}>
          <img src={item.cover} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Thumb;
