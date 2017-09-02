import React from 'react';
import axios from 'axios';
import Input from 'react-toolbox/lib/input';

class Message extends React.Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  render() {
    return (
      <Input
        type="text"
        label="Message"
        name="name"
        onChange={this.props.handleChange.bind(this, 'message')}
      />
    );
  }
}

export default Message;
