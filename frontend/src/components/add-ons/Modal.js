import React from "react";
import Modal from "react-bootstrap/Modal";
import './add-on-styles/Modal.css';

function CentredModal(props) {
  return (
    <Modal {...props} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="modal-title">
            <h1>{props.title}</h1>
          </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal-body">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CentredModal;
