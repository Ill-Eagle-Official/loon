import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";

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

      <Row xs={1} md={2} className="land-row">
        {land.map((item) => {
          return (
            <Col className="land-col">
              <Card
                className="land-card"
                key={item.id}
                onClick={() => handleCardClick(item.id)}
              >
                <Card.Img variant="top" src={item.image_url} className="card-image"/>
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
