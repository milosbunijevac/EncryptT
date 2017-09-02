import React from 'react';
import { Button } from 'react-toolbox/lib/button';

import Name from './Name';
import Message from './Message';
import Expiration from './Expiration';
import Passphrase from './Passphrase';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }

  handleChange(item, value) {
    this.setState({ [item]: value });
  }

  render() {
    return (
      <div className="container mainFrame">
        <h2>Enigma Program</h2>
        <Name handleChange={this.handleChange.bind(this)} />
        <Message handleChange={this.handleChange.bind(this)} />
        <Expiration handleChange={this.handleChange.bind(this)} date={this.state.date} />
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
