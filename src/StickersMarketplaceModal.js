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

class StickersMarketplaceModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orders: [] };
  }

  componentDidMount() {
    fetch(`http://localhost:8080/v0/orderbook`, {
      // mode: "no-cors",
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(orders => orders.json())
      .then(data => {
        console.log("orderbook", data);
        this.setState({ orders: data.orders });
      })
      .catch(err => new Error(err));
  }

  handleBuy(order) {
    console.log(order.orderId);

    fetch("http://localhost:8080/v0/fillorder/", {
      method: "POST",
      Body: {
        orderId: order.orderId,
        taker: "0x53F15Df0693f95B6ECC5bf400E45A912dAf08894"
      }
    })
      .then(orders => orders.json())
      .then(data => {
        console.log(data);
        this.props.handleClose;
      })
      .catch(err => new Error(err));
  }

  render() {
    const { show, handleClose } = this.props;
    const { orders } = this.state;

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get stickers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {orders.length === 0 ? (
              <div className="text-center">Loading...</div>
            ) : (
              orders.map(order => (
                <Col xs={6} key={order.orderId}>
                  <div
                    style={{
                      height: 250,
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Image src={order.uri} responsive />
                    <div className="u-truncate">{order.name}</div>
                  </div>
                  <Button block onClick={() => this.handleBuy(order)}>
                    Buy now!
                  </Button>
                </Col>
              ))
            )}
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}

export default StickersMarketplaceModal;
