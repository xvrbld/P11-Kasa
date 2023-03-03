import React from "react";
import { useParams } from "react-router-dom";
import data from "data/kasa.json";
import Slider from "components/slider/Slider";
import Tag from "components/tags/Tag";
import Collapse from "components/collapse/Collapse";
import styles from "./Logement.module.scss";
import NoPage from "pages/nopage/NoPage";

function Logement() {
  const { id } = useParams();
  const item = data.find((l) => l.id === id);
  
  let firstName;
  let lastName;

  const totalStars = 5;
  let filledStars;
  let emptyStars;

  if (item) {
    [firstName, lastName] = item.host.name.split(" ");

    filledStars = Math.round(item.rating);
    emptyStars = totalStars - filledStars;
  }

  return item ? (
    <div>
      <Slider pictures={item.pictures} />
      <div className={styles.info}>
        <div className={styles.infoLogement}>
          <h2 className={styles.title}>{item.title}</h2>
          <h3 className={styles.location}>{item.location}</h3>
          <div className={styles.tags}>
            {item.tags.map((tag, index) => (
              <Tag key={index} tags={tag} />
            ))}
          </div>
        </div>
        <div className={styles.infoHost}>
          <div className={styles.host}>
            <p className={styles.hostName}>
              {firstName}
              <br />
              {lastName}
            </p>
            <img
              className={styles.hostPicture}
              src={item.host.picture}
              alt="host"
            />
          </div>
          <div className={styles.rating}>
            {[...Array(filledStars)].map((_, index) => (
              <svg
                key={index}
                viewBox="0 0 30 30"
                fill="#FF6060"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
              </svg>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
              <svg
                key={index + filledStars}
                viewBox="0 0 30 30"
                fill="#BDBDBD"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.collapses}>
        <div className={styles.collapseColumn}>
          <Collapse
            collapseLabel="Description"
            collapseText={item.description}
          />
        </div>
        <div className={styles.collapseColumn}>
          <Collapse
            className={styles.equipments}
            collapseLabel="Équipements"
            collapseText={item.equipments}
          />
        </div>
      </div>
    </div>
  ) : (
    <NoPage />
  );
}

export default Logement;
