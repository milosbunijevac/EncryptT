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
        <h2>Enigma Program</h2>
        <Name />
        <Message />
        <Expiration />
        <Button label="ENCRYPT" />
        <Button label="DECRYPT" />
        <div className="footer">
          <Passphrase />
        </div>
      </div>
    );
  }
}

export default Main;
