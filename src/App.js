import React, { Component } from "react";
import { Button, Clearfix, FormControl, Grid } from "react-bootstrap";
import { connect } from "react-redux";
import { Send } from "../node_modules/react-feather";
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

  async componentDidMount() {
    const address = await window.web3.eth.accounts[0];

    var data = JSON.stringify(false);

    xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      `https://api.rarebits.io/v1/addresses/${address}/token_items?api_key=9bbc7cc2-c921-4585-a30b-01c907cef371`
    );

    xhr.send(data);

    xhr.addEventListener("readystatechange", this.processRequest, false);
  }
  processRequest() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      this.setState({
        tokens: response.entries
      });
    }
  }

  setStateFromResponse(responseText) {
    console.log(responseText);

    // this.setState({
    //   tokens: JSON.parse(responseText).entries
    // });
  }

  handleClose() {
    this.setState({ showStickersModal: false });
  }

  render() {
    return (
      <div>
        <Grid
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "space-between",
        //   height: "100%",
        //   flexGrow: 1
        // }}
        >
          <div className="text-center" style={{ padding: "20px 0" }}>
            STIFTIES
            {/* {JSON.stringify(window.web3.eth.accounts[0])} */}
          </div>
          <div>
            {this.props.messages.map(message => <Message message={message} />)}
            <Clearfix />
          </div>
        </Grid>
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            width: "100%",
            padding: "0 15px"
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
              className="mr-3"
            />
            <Button
              onClick={() => this.setState({ showStickersModal: true })}
              className="text-center mr-3"
            >
              😀
            </Button>
            <YourStickersModal
              show={this.state.showStickersModal}
              handleClose={this.handleClose}
              tokens={this.state.tokens}
            />
            <Button bsStyle="success">
              <Send
                size={16}
                onClick={() =>
                  this.props.createMessage({
                    userIsSender: true,
                    time: new Date(),
                    content: this.state.messageText,
                    type: "text"
                  })
                }
              />
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
