import React from 'react';
import Input from 'react-toolbox/lib/input';

class Message extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <Input type="text" label="Name" name="name" />
    );
  }
}

export default Message;
