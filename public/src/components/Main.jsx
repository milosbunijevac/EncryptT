import React from 'react';
import { Button } from 'react-toolbox/lib/button';

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
      <div className="container">
        <Button label="Hello World" />
        sss
      </div>
    );
  }
}

export default Main;
