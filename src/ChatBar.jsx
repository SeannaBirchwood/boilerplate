import React, {Component} from 'react';


class ChatBar extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		if(event.charCode === 13) {
			event.preventDefault();
			console.log("this is the value: " + this.state.value);
			console.log(this.props.currentUser);
			let username = this.refs.username.value;
			let newMessage = this.refs.newMessage.value;
			this.props.onSubmit(username, newMessage);
		}
	}
  render() {
  console.log("Rendering**************")
  const currentUser = this.props.currentUser;

    return (
    <footer>

    	<input id="username" 
    	type="text" 
    	ref="username" 
    	placeholder={currentUser} 
    	value={this.props.currentUser} />

    	<input id="new-message" 
    	type="text" 
    	placeholder="Type a message and hit ENTER" 
    	value={this.state.value}
    	onChange={this.handleChange}
    	onKeyPress={this.handleSubmit} />
  	
  	</footer>

    );
  }
}
export default ChatBar;