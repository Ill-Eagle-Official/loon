import React from "react";
import Button from "react-bootstrap/Button";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="big-title">
        <h1>Welcome to Loon</h1>
      </div>

      <div className="small-instruction">
        <h3>Where would you like to go today?</h3>
      </div>

      <div className="button-container">
        
        <Button variant="outline-primary" size="lg" className="land-button">
          Land
        </Button>
        <Button variant="outline-primary" size="lg" className="sea-button">
          Sea
        </Button>
        <Button variant="outline-primary" size="lg" className="sky-button">
          Sky
        </Button>

      </div>

    </div>
  );
}
