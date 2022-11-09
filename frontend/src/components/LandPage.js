import React, { useState, useEffect } from "react";
import { Flex, CardFlex } from "./CardStyles/Card";

const axios = require("axios");

export default function LandPage() {
  const [land, setLand] = useState([]);

  useEffect(() => {
    getLand();
  }, []);

  const getLand = () => {
    axios
      .get("/api/items/land")
      .then((response) => {
        setLand(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleCardClick = (id) => {
    console.log("you clicked the card");
  };

  return (
    <>
      <h1 className="land-title">LAND</h1>

      <Flex>
        {land.map((land) => (
          <CardFlex key={land.id} onClick={() => handleCardClick(land.id)}>
            <img src={land.image_url} alt={land.name} />
            <h4>{land.name}</h4>
          </CardFlex>
        ))}
      </Flex>
    </>
  );
}
