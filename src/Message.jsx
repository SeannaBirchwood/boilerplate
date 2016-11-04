import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
  console.log("Rendering <App/> **************")
    return (
     <div className="message">
      <span className="username">Anonymous1</span>
      <span className="content">I won't be impressed with technology until I can download food.</span>
    </div>
    );
  }
}
export default App;