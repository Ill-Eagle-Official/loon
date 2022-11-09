import React, { useState, useEffect } from "react";
import { Flex, CardFlex } from "./CardStyles/Card";

const axios = require("axios");

export default function SeaPage() {
  const [sea, setSea] = useState([]);

  useEffect(() => {
    getSea();
  }, []);

  const getSea = () => {
    axios
      .get("/api/items/sea")
      .then((response) => {
        setSea(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleCardClick = (id) => {
    console.log("you clicked the card with id: " + id);
  };

  return (
    <>
      <h1 className="sea-title">SEA</h1>

      <Flex>
        {sea.map((sea) => (
          <CardFlex key={sea.id} onClick={() => handleCardClick(sea.id)}>
            <img src={sea.image_url} alt={sea.name} />
            <h4>{sea.name}</h4>
            <h4>Tap me to see more!</h4>
          </CardFlex>
        ))}
      </Flex>
    </>
  );
}
