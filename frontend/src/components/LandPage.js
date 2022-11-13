import React, { useState, useEffect } from "react";
import { Flex, CardFlex } from "./CardStyles/Card";
import CentredModal from "./add-ons/Modal";

const axios = require("axios");

export default function LandPage() {

  const [land, setLand] = useState([]);
  const [itemObject, setItemObject] = useState({});
  const [modalView, setModalView] = useState(false);

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

  const singleItemId = (id) => {
    const item = land.find((item) => item.id === id);

    setItemObject(item);
  };

  const handleCardClick = (id) => {
    singleItemId(id);
    setModalView(true);
  };

  return (
    <>
      <h1 className="land-title">LAND</h1>

      <Flex>
        {land.map((land) => (
          <CardFlex key={land.id} onClick={() => handleCardClick(land.id)}>
            <img src={land.image_url} alt={land.name} />
            <h4>{land.name}</h4>
            <h4>Tap me to see more!</h4>
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
  );
}
