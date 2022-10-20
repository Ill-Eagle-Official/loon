import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";

const axios = require('axios');

export default function LandPage() {

  const [land, setLand] = useState([]);

  useEffect(() => {
    getLand();
  });

  const getLand = () => {
    axios.get('/api/items')
      .then((response) => {
        setLand(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleCardClick = (id) => {
    console.log('you clicked the card');
  };

  return (

    <>

    <h1 className="land-title">LAND</h1>

    <Container>

      {land.map((item) => {
        return (
          <Card className="land-card" key={item.id} onClick={() => handleCardClick(item.id)}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text className="card-text">
                Tap me to learn more!
              </Card.Text>
            </Card.Body>
          </Card>
        
        )}
      )}

    </Container>

    </>

  );
}