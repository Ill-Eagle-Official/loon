import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import "../styles/AddStyles.css";

export default function NewItemPage() {
  const [item, setItem] = useState({
    name: "",
    image_url: "",
    video_url: "",
    is_land: "false",
    is_sea: "false",
    is_sky: "false",
  });

  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleChange = (event) => {
    const updatedItem = {
      ...item,
      [event.target.name]: event.target.value,
    };
    setItem(updatedItem);
    console.log(updatedItem);
  };

  // handleSubmit function that returns an alert

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Oops! Sorry, this function isn't working at the moment! Please contact Ill Eagle for more information!"
    );
  };

  return (
    <div className="new-item-page">
      <>
        <h1 className="new-item-title">Add a New Item</h1>

        <Form className="new-item-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName" className="name-entry">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter the name of the animal you want to add!"
              value={item.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicImage" className="image-entry">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="image_url"
              type="text"
              placeholder="Enter an image URL for the animal you want to add!"
              value={item.image_url}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicVideo" className="video-entry">
            <Form.Label>Video URL</Form.Label>
            <Form.Control
              name="video_url"
              type="text"
              placeholder="Enter a video URL for the animal you want to add!"
              value={item.video_url}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formGroupSelect" className="select-entry">
            <Form.Label>Does this animal live on land?</Form.Label>
            <Form.Control
              as="select"
              name="is_land"
              value={item.is_land}
              onChange={handleChange}
            >
              <option value={true}>Yes</option>
              <option value={"false"}>No</option>
            </Form.Control>

            <Form.Label>Does this animal live in the sea?</Form.Label>
            <Form.Control
              as="select"
              name="is_sea"
              value={item.is_sea}
              onChange={handleChange}
            >
              <option value={true}>Yes</option>
              <option value={"false"}>No</option>
            </Form.Control>

            <Form.Label>Does this animal fly in the sky?</Form.Label>
            <Form.Control
              as="select"
              name="is_sky"
              value={item.is_sky}
              onChange={handleChange}
            >
              <option value={true}>Yes</option>
              <option value={"false"}>No</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="password-entry">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter the password to add a new item!"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
      </>
    </div>
  );
}

// HANDLE SUBMIT FOR EXPRESS SERVER

// const handleSubmit = (event) => {
//   event.preventDefault();

//   const newItem = {
//     name: item.name,
//     image_url: item.image_url,
//     video_url: item.video_url,
//     is_land: item.is_land,
//     is_sea: item.is_sea,
//     is_sky: item.is_sky,
//   };

//   if(password !== "cooloon") {
//     alert("Wrong password!");
//     return;
//   }

//   if (newItem.name === "" || newItem.image_url === "" || newItem.video_url === "") {
//     alert("Please fill in all fields!");
//     return;
//   }

//   fetch("/api/items", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newItem),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       alert("Item added successfully!");
//       window.location.href = "/";
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });

// };
