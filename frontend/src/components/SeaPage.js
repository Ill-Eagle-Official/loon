import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";

const axios = require("axios");

export default function LandPage() {
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
      <h1 className="sea-title">Sea</h1>

      <Row xs={1} md={2} className="land-row">
        {sea.map((item) => {
          return (
            <Col className="sea-col">
              <Card
                className="sea-card"
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