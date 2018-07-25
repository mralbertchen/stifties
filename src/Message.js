import moment from "moment";
import React from "react";
import { Panel } from "react-bootstrap";

const styles = {
  message: {
    width: "66%"
  }
};

const Message = ({ message }) => {
  return (
    <Panel
      style={styles.message}
      bsStyle={message.userIsSender ? "default" : "success"}
      className={`${message.userIsSender || "pull-right"} clearfix mb-3`}
    >
      <Panel.Body>
        <div className="mb-1">{message.content}</div>
        <div className="text-muted">
          {moment(message.time).format("DD MMMM, H:m")}
        </div>
      </Panel.Body>
    </Panel>
  );
};

export default Message;
