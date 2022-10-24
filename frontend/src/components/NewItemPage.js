import React from "react";
import { Button, Form } from "react-bootstrap";

export default function NewItemPage() {

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name: event.target.name.value,
      image_url: event.target.image_url.value,
      video_url: event.target.video_url.value,
      is_land: event.target.is_land.value,
      is_sea: event.target.is_sea.value,
      is_sky: event.target.is_sky.value,
    };

    fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h1 className="new-item-title">Add a new item</h1>

      <Form className="new-item-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter the name of the animal you want to add!" />
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Enter an image URL for the animal you want to add!" />
        </Form.Group>

        <Form.Group controlId="formBasicVideo">
          <Form.Label>Video URL</Form.Label>
          <Form.Control type="text" placeholder="Enter a video URL for the animal you want to add!" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Does this animal live on land?" />
          <Form.Check type="checkbox" label="Does this animal live in the sea?" />
          <Form.Check type="checkbox" label="Does this animal fly in the sky?" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </>

  )

};