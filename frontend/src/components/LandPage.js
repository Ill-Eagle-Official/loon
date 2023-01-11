import React, { useState, useEffect } from "react";
import { Flex, CardFlex } from "./CardStyles/Card";
import CentredModal from "./add-ons/Modal";

import animalsArray from "../utils/AnimalsStatic";

import "../styles/LandStyles.css";

const axios = require("axios");

export default function LandPage() {
  const [land, setLand] = useState([]);
  const [itemObject, setItemObject] = useState({});
  const [modalView, setModalView] = useState(false);

  useEffect(() => {
    getStaticLand();
  }, []);

  // change useEffect to take this function when using express backend
  const getLand = () => {
    axios
      .get("/api/items/land")
      .then((response) => {
        setLand(response.data);
      })
      .catch((err) => console.log(err));
  };

  // change useEffect to this function when using static data
  const getStaticLand = () => {
    let finalArray = [];

    animalsArray.forEach((animal) => {
      if (animal.is_land === "true") {
        finalArray.push(animal);
      }
    });

    setLand(finalArray);
  };

  const handleCardClick = (id) => {
    const item = land.find((item) => item.id === id);

    setItemObject(item);
    setModalView(true);
  };

  return (
    <div className="background">
      <div className="land-page">
        <>
          <h1 className="land-title">LAND</h1>

          <Flex>
            {land.map((land) => (
              <CardFlex
                className="land-card"
                key={land.id}
                onClick={() => handleCardClick(land.id)}
              >
                <img src={land.image_url} alt={land.name} />
                <h4 className="card-title">{land.name}</h4>
                <h4 className="card-description">Tap me to see more!</h4>
              </CardFlex>
            ))}

            <CentredModal
              show={modalView}
              onHide={() => setModalView(false)}
              title={itemObject.name}
              videoId={itemObject.video_url}
            />
          </Flex>
        </>
      </div>
    </div>
  );
}
