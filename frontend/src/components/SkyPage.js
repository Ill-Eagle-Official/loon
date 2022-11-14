import React, { useState, useEffect } from "react";
import { Flex, CardFlex } from "./CardStyles/Card";
import CentredModal from "./add-ons/Modal";

import '../styles/SkyStyles.css';

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
    <div className='sky-page'>
    <>
      <h1 className="sky-title">SKY</h1>

      <Flex>
        {sky.map((sky) => (
          <CardFlex className="sky-card" key={sky.id} onClick={() => handleCardClick(sky.id)}>
            <img src={sky.image_url} alt={sky.name} />
            <h4 className="card-title">{sky.name}</h4>
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
  );
}
