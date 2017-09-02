import React from 'react';

import Name from './Name';
import Message from './Message';
import Expiration from './Expiration';
import Passphrase from './Passphrase';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { test: '' };
  }
  render() {
    return (
      <div>
        This is a test so far
      </div>
    );
  }
}

export default Main;
