import React from "react";
import { Col, Image, Modal, Row } from "react-bootstrap";

const stickers = [
  {
    id: "0f56df69-11b9-40d4-b0ee-c37eab10c145",
    name: "Cryptokitty #1",
    url:
      "https://steemitimages.com/DQmVLGFaHhUTUz9kLWF6RkT9C8z9Apr3FA4sWysTUQK2scT/kittydracula.png"
  },
  {
    id: "d31dc424-7bed-4128-990c-4b77035ef205",
    name: "Cryptokitty #2",
    url:
      "https://i2.wp.com/www.crypto-news.in/wp-content/uploads/2017/12/cryptokitties-cryptonews-hedwig.png"
  },
  {
    id: "f70d4fc9-bb23-4e30-814e-1c34555a83ca",
    name: "Axie #1",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGDsi6Sqm2sBTJe7lUUlhW1kcrTO86zZeXq3yILRDNS6akZAWMA"
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
              <Image src={sticker.url} responsive />
            </Col>
          ))}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default StickersMarketplaceModal;
