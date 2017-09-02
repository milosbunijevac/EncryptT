import React from 'react';

class Passphrase extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div>
        <h5> Your passphrase - </h5>
        <h5> Generate new Passphrase </h5>
      </div>
    );
  }
}

export default Passphrase;
