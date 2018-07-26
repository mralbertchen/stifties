import React, { Component } from "react";
import { Button, Clearfix, FormControl } from "react-bootstrap";
// import * as MaterialIcons from "react-material-icons";
import { connect } from "react-redux";
import { createMessage } from "./actions";
import Message from "./Message";
import YourStickersModal from "./YourStickersModal";

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages,
    ethAddress: state.ethAddress
  };
};

var xhr;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStickersModal: false,
      messageText: "",
      tokens: []
    };

    this.handleClose = this.handleClose.bind(this);
    this.processRequest = this.processRequest.bind(this);
  }

  componentDidMount() {
    this.refreshWallet();
  }

  componentWillReceiveProps() {
    this.refreshWallet();
  }

  refreshWallet() {
    let address =
      window.web3.eth.accounts[0] && window.web3.eth.accounts[0].toLowerCase();

    var data = JSON.stringify(false);

    xhr = new XMLHttpRequest();

    xhr.open("GET", `http://localhost:8080/v0/portfolio/${address}`);

    xhr.send(data);

    xhr.addEventListener("readystatechange", this.processRequest, false);
  }

  processRequest() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      this.setState({
        tokens: response
      });
    }
  }

  handleClose() {
    this.setState({ showStickersModal: false });
  }

  render() {
    return (
      <div style={{ width: 400, padding: "0 15px" }}>
        <div>
          <div className="text-center overline" style={{ padding: "20px 0" }}>
            STIFTIES
            {/* {JSON.stringify(window.web3.eth.accounts[0])} */}
          </div>
          <div style={{ marginBottom: 50 }}>
            {this.props.messages.map(message => <Message message={message} />)}
            <Clearfix />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            width: 400 - 30
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <FormControl
              value={this.state.messageText}
              onChange={e => this.setState({ messageText: e.target.value })}
              className="mr-3 fancy-input"
            />
            <Button
              onClick={() => this.setState({ showStickersModal: true })}
              className="text-center mr-3 fancy-buttons"
            >
              Stifties
            </Button>
            <YourStickersModal
              show={this.state.showStickersModal}
              handleClose={this.handleClose}
              refreshWallet={this.refreshWallet.bind(this)}
              tokens={this.state.tokens}
            />
            <Button
              bsStyle="success"
              className="fancy-buttons"
              style={{ borderWidth: 0 }}
              onClick={() => {
                this.props.createMessage({
                  userIsSender: true,
                  time: new Date(),
                  content: this.state.messageText,
                  type: "text"
                });
                this.setState({ messageText: "" });
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createMessage: message => {
      dispatch(createMessage(message));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
