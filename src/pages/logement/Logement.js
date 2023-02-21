import React from "react";
import { useParams } from "react-router-dom";
import data from "data/kasa.json";

function Logement() {
  const { id } = useParams();
  const item = data.find((l) => l.id === id);
  return (
    <div>
      <img src={item.cover} alt="cover"></img>
      <h2>{item.title}</h2>
      {item.location}
      {item.tags}
      <div>
        {item.host.name}
        <img src={item.host.picture} alt="host"></img>
      </div>
      {item.rating}
      {item.description}
      {item.equipments}
    </div>
  );
}

export default Logement;
