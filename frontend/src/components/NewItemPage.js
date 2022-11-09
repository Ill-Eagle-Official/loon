import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function NewItemPage() {
  const [item, setItem] = useState({
    name: "",
    image_url: "",
    video_url: "",
    is_land: false,
    is_sea: false,
    is_sky: false,
  });

  const handleChange = (event) => {
    const updatedItem = {
      ...item,
      [event.target.name]: event.target.value,
    };
    setItem(updatedItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name: item.name,
      image_url: item.image_url,
      video_url: item.video_url,
      is_land: item.is_land,
      is_sea: item.is_sea,
      is_sky: item.is_sky,
    };

    fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
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
          <Form.Control
            type="text"
            placeholder="Enter the name of the animal you want to add!"
            value={item.name}
          />
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter an image URL for the animal you want to add!"
            value={item.image_url}
          />
        </Form.Group>

        <Form.Group controlId="formBasicVideo">
          <Form.Label>Video URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a video URL for the animal you want to add!"
            value={item.video_url}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Does this animal live on land?" />
          <Form.Check
            type="checkbox"
            label="Does this animal swim in the sea?"
          />
          <Form.Check
            type="checkbox"
            label="Does this animal fly in the sky?"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
