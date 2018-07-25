import moment from "moment";
import React from "react";
import { Image, Panel } from "react-bootstrap";

const styles = {
  message: {
    width: "66%"
  }
};

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return (
      <div
        style={styles.message}
        className={`${message.userIsSender && "pull-right"} clearfix mb-3`}
      >
        <Panel
          className={`${
            message.userIsSender ? "panel-right" : "panel-left"
          } clearfix mb-3`}
        >
          <Panel.Body>
            <div>{message.content}</div>
            <Image src={message.imageUrl} responsive />
          </Panel.Body>
        </Panel>
        <div className="text-muted">
          {moment(message.time).format("DD MMMM, H:m")}
        </div>
      </div>
    );
  }
}

export default Message;
