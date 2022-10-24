import React from "react";
import { Button, Form } from "react-bootstrap";

export default function NewItemPage() {

  return (
    <>
      <h1 className="new-item-title">Add a new item</h1>

      <Form className="new-item-form">
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