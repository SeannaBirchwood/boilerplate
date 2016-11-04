import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
  console.log("Rendering <App/> **************")
    return (
  <div id="message-list">
  	<div className="message system">
      Anonymous1 changed their name to nomnom.
    </div>
  </div>

    );
  }
}
export default App;