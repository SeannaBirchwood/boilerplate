import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Rendering**************");
    const messages = this.props.messages;
    const messageItems = messages.map((message) => {
      return <Message message={message} key={message.id.toString()} />
    })
    return (
  <div id="message-list">
  {messageItems}
  	<div className="message system">
    </div>
  </div>

    );
  }
}
export default MessageList;