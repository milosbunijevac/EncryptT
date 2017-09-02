import React from 'react';
import Input from 'react-toolbox/lib/input';

class Name extends React.Component {
  constructor() {
    super();
    this.state = { none: '' };
  }

  render() {
    return (
      <div>
        <Input type="text" label="Name" name="name" onChange={this.props.handleChange.bind(this, 'name')} />
      </div>
    );
  }
}

export default Name;
