import React from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";

const stickers = [
  {
    id: "4e386a18-e870-4b7e-b511-08c6dc8a2156",
    name: "Rando blastr",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-6WHcj1whnpBCKptmBEk1b1qtzwj90_P6dT-fIWllnx3EH2Z"
  },
  {
    id: "b7253368-6eb2-4779-976a-e16617c2c8a5",
    name: "car #2",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYxdwdSZzey849KWWUOQjkhBUwHJn9Lji1VOi7emFYXfS9dmy"
  }
];

const StickersMarketplaceModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Get stickers</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {stickers.map(sticker => (
            <Col xs={6} key={sticker.id}>
              <div
                style={{ height: 250, display: "flex", alignItems: "center" }}
              >
                <Image src={sticker.url} responsive />
              </div>
              <Button block>Buy now!</Button>
            </Col>
          ))}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default StickersMarketplaceModal;
