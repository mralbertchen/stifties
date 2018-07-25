import React, { Component } from "react";
import { Button, Clearfix, FormControl, Grid } from "react-bootstrap";
import { Send } from "../node_modules/react-feather";
import Message from "./Message";
import YourStickersModal from "./YourStickersModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showStickersModal: false };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ showStickersModal: false });
  }

  render() {
    return (
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          height: "100%"
        }}
      >
        <div>
          <Message
            message={{
              userIsSender: false,
              time:
                "Wed Jun 27 2018 16:30:13 GMT+0800 (Hong Kong Standard Time)",
              content: "Hello there!"
            }}
          />
          <Clearfix />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignSelf: "end"
          }}
        >
          <FormControl />
          <Button onClick={() => this.setState({ showStickersModal: true })}>
            😀
          </Button>
          <YourStickersModal
            show={this.state.showStickersModal}
            handleClose={this.handleClose}
          />
          <Button bsStyle="success">
            <Send size={16} />
          </Button>
        </div>
      </Grid>
    );
  }
}

export default App;
