// Modules
import React from "react";

// Helpers
import { fbHelper } from "./customerChat.helpers";

class CustomerChat extends React.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      fbHelper((FB) => this.timeout && FB.XFBML.parse());
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    delete this.timeout;
  }

  render() {
    return (
      <div
        minimized="true"
        attribution="setup_tool"
        className="fb-customerchat"
        page_id={101898992228038}
      />
    );
  }
}

// Exports
export default CustomerChat;
