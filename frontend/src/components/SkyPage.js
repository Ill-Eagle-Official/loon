import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";

const axios = require("axios");

export default function SkyPage() {
  const [sky, setSky] = useState([]);

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
    console.log("you clicked the card with id: " + id);
  };

  return (
    <>
      <h1 className="sky-title">SKY</h1>

      <Row xs={1} md={2} className="sky-row">
        {sky.map((item) => {
          return (
            <Col className="sky-col" key={item.id}>
              <Card
                className="sky-card"
                key={item.id}
                onClick={() => handleCardClick(item.id)}
              >
                <Card.Img
                  variant="top"
                  src={item.image_url}
                  className="card-image"
                />
                <Card.Body>
                  <Card.Title className="card-title">{item.name}</Card.Title>
                  <Card.Text className="card-text">
                    Tap me to learn more!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
