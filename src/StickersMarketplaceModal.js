import React from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import request from "request-promise";

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
    this.props.handleClose();

    var options = {
      method: "POST",
      url: "http://localhost:8080/v0/fillorder/",
      headers: {
        "Postman-Token": "9d0f04d6-546f-4b69-bdfc-2f98ccf5cc3b",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json"
      },
      body: {
        orderId: order.orderId,
        taker: "0x6ecbe1db9ef729cbe972c83fb886247691fb6beb"
      },
      json: true
    };

    request(options, function(error, response, body) {
      if (error) throw new Error(error);
    }).then(() => this.props.handleRefresh());
  }

  render() {
    const { show, handleClose } = this.props;
    const { orders } = this.state;

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get stifties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {orders.length === 0 ? (
              <div className="text-center">Loading...</div>
            ) : (
              orders.map(order => (
                <Col xs={6} key={order.orderId} className="mb-5">
                  <div
                    style={{
                      height: 150,
                      display: "flex",
                      alignItems: "center"
                    }}
                    className="mb-2"
                  >
                    {console.log(order)}
                    <Image src={order.uri} responsive />
                  </div>
                  <div className="u-truncate">{order.name}</div>
                  <div
                    className="u-truncate mb-2"
                    style={{ color: "rgba(0, 0, 0, 0.25)" }}
                  >
                    {order.takerAssetAmount} Gwei
                  </div>
                  <Button
                    className="fancy-buttons"
                    bsStyle="primary"
                    onClick={() => {
                      this.handleBuy(order);
                    }}
                    bsSize="small"
                  >
                    Get
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
