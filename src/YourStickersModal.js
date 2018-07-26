import React from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import { Send } from "react-feather";
import { connect } from "react-redux";
import { createMessage } from "./actions";
import StickersMarketplaceModal from "./StickersMarketplaceModal";

const YourStickersModal = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showStickersModal: false, tokens: [], purchasing: false };

    this.handleClose = this.handleClose.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleClose() {
    this.setState({
      showStickersModal: false,
      purchasing: !this.state.purchasing
    });
  }

  handleRefresh() {
    this.props.refreshWallet();
    this.setState({
      purchasing: false
    });
  }

  handleSend(token) {
    this.props.createMessage({
      userIsSender: true,
      time: new Date(),
      imageUrl: token.uri,
      type: "image"
    });
  }

  render() {
    const { show, handleClose, tokens } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your stifties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.purchasing && (
            <div className="pa-5 text-center">Getting your stifty…</div>
          )}
          <Row>
            {tokens.length !== 0 ? (
              tokens.map(token => (
                <Col xs={6} key={token.token_id} className="mb-3">
                  <Image src={token.uri} responsive className="mb-3" />
                  <Button
                    onClick={() => {
                      this.props.handleClose();
                      this.handleSend(token);
                    }}
                    className="fancy-buttons"
                    bsStyle=""
                  >
                    <Send size={16} className="mr-2" />
                    Send
                  </Button>
                </Col>
              ))
            ) : (
              <div className="text-center pa-5">No stifties</div>
            )}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => this.setState({ showStickersModal: true })}
            className="fancy-buttons"
            bsStyle="primary"
          >
            Get stifties
          </Button>
          <StickersMarketplaceModal
            show={this.state.showStickersModal}
            handleClose={this.handleClose}
            handleRefresh={this.handleRefresh}
          />
        </Modal.Footer>
      </Modal>
    );
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createMessage: message => {
      dispatch(createMessage(message));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(YourStickersModal);
