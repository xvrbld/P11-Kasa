import React from "react";
import { useParams } from "react-router-dom";
import data from "data/kasa.json";

function Logement() {
    const {id} = useParams();
    const item = data.find(l => l.id === id)
    return (
        <div>
            {item.title}
            <img src={item.cover} alt="cover"></img>
            {item.description}
            {item.rating}
            {item.location}
        </div>
    );
}

export default Logement;