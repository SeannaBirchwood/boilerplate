import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
  console.log("Rendering <App/> **************")
    return (

    <footer>
    	<input id="username" type="text" placeholder="Your Name (Optional)" />
    	<input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
  	</footer>

    );
  }
}
export default App;