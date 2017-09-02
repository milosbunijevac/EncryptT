import React from 'react';
import Input from 'react-toolbox/lib/input';

class Name extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div>
        <Input type="text" label="Name" name="name" />
      </div>
    );
  }
}

export default Name;
