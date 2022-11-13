import React, { useState, useEffect } from "react";
import { Flex, CardFlex } from "./CardStyles/Card";
import CentredModal from "./add-ons/Modal";

const axios = require("axios");

export default function SkyPage() {
  const [sky, setSky] = useState([]);
  const [itemObject, setItemObject] = useState({});
  const [modalView, setModalView] = useState(false);

  useEffect(() => {
    getSky();
  }, []);

  const getSky = () => {
    axios
      .get("/api/items/sky")
      .then((response) => {
        setSky(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleCardClick = (id) => {
    const item = sky.find((item) => item.id === id);

    setItemObject(item);
    setModalView(true);
  };

  return (
    <>
      <h1 className="sky-title">SKY</h1>

      <Flex>
        {sky.map((sky) => (
          <CardFlex key={sky.id} onClick={() => handleCardClick(sky.id)}>
            <img src={sky.image_url} alt={sky.name} />
            <h4>{sky.name}</h4>
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
